<?php

namespace Home\Controller;


use Think\Controller;

class ShareController extends CommonController {
    
    public function index() {
        $this->share = M('share')->where(array(
            'del' => 0
        ))->order('visits DESC')->select();
        //分页开始
        $count       = M('share')->where(array(
            'del' => '0'
        ))->count(); // 查询满足要求的总记录数
        $page        = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        $page->rollPage = 3; //控制页码数量
        $show           = $page->show(); // 分页显示输出
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = M('share')->where(array(
            'del' => '0'
        ))->order('time DESC')->limit($limit)->select();
        $this->assign('share', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        $this->display();
    }
    
    //发布分享视图
    public function add() {
        $this->display();
    }
    
    //查看分享
    public function look() {
        $id = (int) $_GET['id'];
        M('share')->where(array(
            'id' => $id
        ))->setInc('visits', 1);
        $this->look = M('share')->where(array(
            'id' => $id
        ))->select();
        
        $count = M('shacom')->where(array(
            'bid' => $id
        ))->where(array(
            'del' => 0
        ))->count();
        $page  = new \Think\Page($count, 8);
        $page->setConfig('header', '条评论');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        $page->rollPage = 3; //控制页码数量
        $show           = $page->show(); // 分页显示输出
        $shacom         = D('ShacomView');
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = $shacom->where(array(
            'bid' => $id
        ))->where(array(
            'del' => 0
        ))->order('time DESC')->limit($limit)->select();
        $this->assign('shacom', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        $this->display();
    }
    
    //编辑视图
    public function edit() {
        $id   = (int) $_GET['id'];
        $rbac = M('share')->where(array(
            'id' => $id
        ))->field('uid')->select();
        if ($rbac[0]['uid'] == session('id')) {
            $this->edit = M('share')->where(array(
                'id' => $id
            ))->select();
            $this->display('add');
        } else {
            $this->error('你无法编辑别人的文章');
        }
        
    }
    
    //编辑表单处理
    public function editpost() {
        $data         = $_POST;
        $data['time'] = time();
        if (M('share')->where(array(
            'id' => $_POST['id']
        ))->save($data)) {
            $this->redirect('Share/index');
        } else {
            $this->error('修改失败');
        }
        
    }
    //发布表单处理
    public function sharepost() {
        $data = array(
            'title' => $_POST['title'],
            'content' => $_POST['content'],
            'uid' => (int) session('id'),
            'author' => session('name'),
            'time' => time()
        );
        //添加数据
        if (M('share')->add($data)) {
            $this->redirect('Share/index');
        } else {
            $this->error('发布失败');
        }
    }
    
    //删除
    public function del() {
        $id   = (int) $_GET['id'];
        $rbac = M('share')->where(array(
            'id' => $id
        ))->field('uid')->select();
        if ($rbac[0]['uid'] == session('id')) {
            if (M('share')->where(array(
                'id' => $id
            ))->save(array(
                'del' => '1'
            ))) {
                $this->success('删除成功');
            } else {
                $this->error('删除失败');
            }
        } else {
            $this->error('你无法删除别人的文章');
        }
    }
    
    //发布评论
    public function addcom() {
        if (!IS_AJAX)
            $this->error('页面不存在');
        $content = str_replace("\n", "<br>", I('content')); //去回车
        $data    = array(
            'content' => str_replace(" ", "&nbsp;", $content), //去空格
            'uid' => (int) session('id'),
            'bid' => I('bid'),
            'time' => time()
        );
        //添加数据
        if (M('shacom')->add($data)) {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-check"></i> 提交成功',
                'status' => 1
            ), 'json');
        } else {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-remove"></i> 提交失败,请重试',
                'status' => 0
            ), 'json');
        }
    }
}