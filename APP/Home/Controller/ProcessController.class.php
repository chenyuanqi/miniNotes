<?php

namespace Home\Controller;


use Think\Controller;

class ProcessController extends CommonController {
	
    // 需求分析
    public function needle() {
        $model = M('needle');

        // 分页开始
        $count       = $model->count(); // 查询满足要求的总记录数
        $page        = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        // 控制页码数量
        $page->rollPage = 3; 
        $show           = $page->show(); 
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = $model->order('create_time DESC')->limit($limit)->select();
        foreach ($list as $key => &$value) {
            $value['program'] = M('program')->where(array(
                'id' => $value['pid']))->getField('name');
            $value['author']  = M('user')->where(array(
                'id' => $value['uid']))->getField('username');
        }
        $this->assign('datas', $list); 
        $this->assign('page', $show); 
    	$this->display();
    }


    // 添加需求
    public function addNeedle() {

        $this->display();
    }


    // 添加需求处理
    public function addNeedleAction() {
        if (IS_POST) {
            $programArr = array();
            $needleArr  = array();

            // 添加项目
            $programArr = array(
                'uid'  => session('id'),
                'name' => I('post.name'),
                'create_time' => date('Y-m-d H:i:s')
                );
            $program = M('program')->add($programArr);

            // 添加需求
            $needleArr  = array(
                'pid' => $program,
                'uid'  => session('id'),
                'title' => I('post.title'),
                'background' => I('post.background'),
                'target' => I('post.aim'),
                'content' => I('post.content'),
                'plan' => I('post.plan'),
                'status' => I('post.type'),
                'create_time' => date('Y-m-d H:i:s')
            );
            $needle = M('needle')->add($needleArr);

            // 释放，并提示
            unset($programArr, $needleArr);
            !$needle && $this->error('提示：需求添加失败！');
            $this->success('提示：需求添加成功！', U('Process/needle'), 3);
        }
    }

    // 编辑需求
    public function editNeedle() {
        $needleArr = M('needle')->find(I('get.id'));
        $programName = M('program')->where(array(
            'id' => $needleArr['pid'])
        )->getField('name');

        $this->info = $needleArr;
        $this->program = $programName;
        $this->display();
    }


    // 编辑需求处理
    public function editNeedleAction() {
        if (IS_POST) {
            $programArr = array();
            $needleArr  = array();

            // 编辑项目
            $programArr = array(
                'id'   => I('post.pid'),
                'name' => I('post.name')
                );
            $program = M('program')->save($programArr);

            // 编辑需求
            $needleArr  = array(
                'id' => I('post.id'),
                'title' => I('post.title'),
                'background' => I('post.background'),
                'target' => I('post.aim'),
                'content' => I('post.content'),
                'plan' => I('post.plan'),
                'status' => I('post.type')
            );
            $needle = M('needle')->save($needleArr);

            // 释放，并提示
            unset($programArr, $needleArr);
            !$needle && $this->error('提示：需求修改失败！');
            $this->success('提示：需求修改成功！');
        }
    }


    // 查看需求
    public function showNeedle() {
        $id = (int) $_GET['id'];
        M('needle')->where(array(
            'id' =>$id))->setInc('click_num');
        $show = M('needle')->find($id);
        $this->program= M('program')->where(array(
            'id' => $show['pid']))->getField('name');
        $this->author = M('user')->where(array(
            'id' => $show['uid']))->getField('username');

        $this->show = $show;
        $this->display();
    }


    // 删除需求
    public function delNeedle() {
        $rel = M('needle')->delete(I('get.id'));

        !$rel && $this->error('提示：需求删除失败！');
        $this->success('提示：需求删除成功', U('Process/needle'), 3);
    }


    // 甘特图
    public function procedure() {
    	$model = M('program');

        // 分页开始
        $count       = $model->count(); // 查询满足要求的总记录数
        $page        = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        // 控制页码数量
        $page->rollPage = 3; 
        $show           = $page->show(); 
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = $model->order('create_time DESC')->limit($limit)->select();
        foreach ($list as $key => &$value) {
            $value['author']  = M('user')->where(array(
                'id' => $value['uid']))->getField('username');
        }
        $this->assign('datas', $list); 
        $this->assign('page', $show); 
        $this->display();
    }


    // 甘特图详情
    public function showProcedure() {
        // 获取任务信息
        $taskArr     = M('task')->where(array(
            'program_id' => intval(I('get.id'))
        ))->select();
        if (!is_array($taskArr)) {
            $taskStr = '[]';
        } else {
            $taskStr = $this->taskJsonCreate($taskArr);
        } 

        // 获取项目信息
        $programData = M('program')->find(intval(I('get.id')));
        // 任务编号获取
        $code = M('task')->where(array(
            'program_id' => intval(I('get.id'))
        ))->order('create_time desc')->getField('task_code');

        // 团队人员获取
        $this->teamData    = M('user')->field('id, name')->select();
        $this->programData = $programData;
        $this->taskCode    = $code ? ($code + 1) : 1;
        $programData['start_time'] && $this->startDate   = transDate($programData['start_time']);
        $programData['end_time']   && $this->endDate     = transDate($programData['end_time']);
        $this->taskStr     = $taskStr;
        $this->display();
    }


    // 任务组装
    private function taskJsonCreate($arr) {
        $str = '[';
        foreach ($arr as $key => $val) {
            $str .= "{id: ".$val['task_code'];
            $str .= ", name: '".$val['task_name'];
            $str .= "', series: [{id: ".$key;
            $str .= ", name: '".$val['task_user'];
            $str .= "', text: '".$val['percentage'];
            $str .= "', start: new Date(".transDate($val['start_date']);
            $str .= "), end: new Date(".transDate($val['end_date']);
            $str .= ")}]},";
        }
        return substr($str, 0, -1).']';
    }


    // 更新项目时间
    public function saveProgramTime() {
        if (IS_AJAX) {
            $program_map['id'] = intval(I('post.pid'));

            $field  = I('post.type') != 'start' ? 'end_time' : 'start_time'; 
            $result = M('program')->where($program_map)->setField($field, I('post.val'));
            !$result && exit('error');
            exit('success');
        }
    }


    // 添加任务
    public function addTaskAction() {
        if (IS_AJAX) {
            $taskData = array(
                'program_id'=> I('post.pid'),
                'task_code' => I('post.task_code'),
                'task_name' => I('post.task_name'),
                'task_user' => I('post.task_user'),
                'start_date'=> I('post.task_start'),
                'end_date'  => I('post.task_end'),
                'percentage'=> I('post.task_done') ?: 0,
                'create_time' => date('Y-m-d H:i:s')
            );
            $mes    = D('Task')->taskValidate($taskData);
            $mes    && exit($mes);

            $result = M('task')->add($taskData);
            !$result&& exit('添加失败, 请稍后重试~');
            exit('success');
        }
    }

    // 编辑任务
    public function editTaskAction() {
        if (IS_AJAX) {
            $taskData = array(
                'program_id'=> I('post.pid'),
                'task_code' => I('post.task_code'),
                'task_name' => I('post.task_name'),
                'task_user' => I('post.task_user'),
                'start_date'=> I('post.task_start'),
                'end_date'  => I('post.task_end'),
                'percentage'=> I('post.task_done') ?: 0
            );
            $mes    = D('Task')->taskValidate($taskData, true);
            $mes    && exit($mes);

            $result = M('task')->where(array(
                'program_id'=> I('post.pid'),
                'task_code' => I('post.task_code')
            ))->save($taskData);

            !$result && exit('编辑失败，请稍后重试~');
            exit('success');
        }
    }


    // 删除任务
    public function delTaskAction() {
        if (IS_AJAX) {
            $result = M('task')->where(array(
                'program_id'=> I('post.pid'),
                'task_code' => I('post.task_code')
            ))->delete();

            !$result && exit('error');
            exit('success');
        }
    }


    // FAQ
    public function faq() {
    	$model = M('program');

        // 分页开始
        $count       = $model->count(); // 查询满足要求的总记录数
        $page        = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        // 控制页码数量
        $page->rollPage = 3; 
        $show           = $page->show(); 
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = $model->order('create_time DESC')->limit($limit)->select();
        foreach ($list as $key => &$value) {
            $value['author']  = M('user')->where(array(
                'id' => $value['uid']))->getField('username');
        }
        $this->assign('datas', $list); 
        $this->assign('page', $show); 
        $this->display();
    }


     // 修改 FAQ
    public function changeFaq() {
        if ('editClass' == I('get.act') && I('get.cid')) {
            $this->class = M('faq_category')->find(I('get.cid'));
        }

        if ('editFaq' == I('get.act') && I('get.fid')) {
            $this->faq = M('faq')->find(I('get.fid'));
        }

        // faq 分类信息
        $categoryData  = M('faq_category')->where(array(
            'pid' => I('get.id')))->select();
        // faq 信息
        $where['cid'] = array('in', join(',', M('faq_category')->where(array(
            'pid' => I('get.id')))->getField('id', true)));
        $faqData = M('faq')->where($where)->select();

        $this->program = M('program')->where(array(
            'id' => I('get.id')))->getField('name');
        $this->categoryData = $categoryData;
        $this->faqData = $faqData;
        $this->display();
    }


    // 修改 FAQ 处理
    public function changeFaqAction() {
        if (IS_POST) {
            $classArr = array();
            $contentArr = array();

            switch (I('get.type')) {
                // 添加和编辑分类
                case 'class':
                    $categoryModel = M('faq_category');
                    if (I('post.cid')) {
                        $classArr = array(
                            'id'  => I('post.cid'),
                            'name' => I('post.class'),
                            'sort' => I('post.rank')
                        );
                        $result = $categoryModel->save($classArr);
                    } else {
                        $classArr = array(
                            'uid'  => session('id'),
                            'pid'  => I('post.pid'),
                            'name' => I('post.class'),
                            'sort' => I('post.rank'),
                            'create_time' => date('Y-m-d H:i:s')
                        );
                        $result = $categoryModel->add($classArr);
                    }
                    break;
                
                case 'content':
                    $faqModel = M('faq');
                    if (I('post.fid')) {
                        $contentArr = array(
                            'id'  => I('post.fid'),
                            'cid'  => I('post.cid'),
                            'question' => I('post.title'),
                            'answer' => I('post.content')
                        );
                        $result = $faqModel->save($contentArr);
                    } else {
                        $contentArr = array(
                            'uid'  => session('id'),
                            'cid'  => I('post.cid'),
                            'question' => I('post.title'),
                            'answer' => I('post.content'),
                            'create_time' => date('Y-m-d H:i:s')
                        );
                        $result = $faqModel->add($contentArr);
                    }
                    break;
            }

            !$result && $this->error('提示：请求失败！');
            $this->success('提示：请求成功');
        }
    }


    // 展示 FAQ
    public function showFaq() {
        // 获取项目下的所有分类
        $categoryData  = M('faq_category')->field('id, name')->where(array(
            'pid' => I('get.id')))->order('sort desc')->select();
        // faq 信息
        foreach ($categoryData as $key => &$value) {
            $value['faq'] = M('faq')->where(array(
                'cid' => $value['id']))->select();
        }

        // 项目名称
        $this->program = M('program')->where(array(
            'id' => I('get.id')))->getField('name');
        $this->faqData = $categoryData;
        $this->display();
    }

    // 删除 FAQ
    public function delFaq() {
        if ('faq' != I('get.style')) {
            $rel = M('faq_category')->delete(I('get.id'));
        } else {
            $rel = M('faq')->delete(I('get.id'));
        }
        

        !$rel && $this->error('提示：删除失败！');
        $this->success('提示：删除成功');
    }
}