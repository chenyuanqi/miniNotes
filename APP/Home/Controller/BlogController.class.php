<?php

namespace Home\Controller;


use Think\Controller;

class BlogController extends CommonController {
    //我的日志
    public function index() {
        $uid        = $_GET['uid'];
        $this->user = M('user')->select();

        //分页开始
        $count      = M('blog')->where(array(
            'sta' => array('neq', 2),
            'uid' => $uid
        ))->count(); // 查询满足要求的总记录数
        $page       = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        $page->rollPage = 3; //控制页码数量
        $show           = $page->show(); // 分页显示输出
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = M('blog')->where(array(
            'sta' => array('neq', 2),
            'uid' => $uid
        ))->order('time DESC')->limit($limit)->select();
        $this->assign('myblog', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        //标题和H1显示的文字
        if (session('id') == $uid) { //判断是那个用户，如果是自己则把显示的名称换成“我”
            $this->assign('name', '我');
        } else {
            $name = M('user')->where(array(
                'id' => $uid
            ))->field('name')->select(); //通过get过来的用户id，查询用户姓名
            $this->assign('name', $name[0]['name']); //获取get过来的用户id再输出到模版
        }

        $this->display();
    }
    
    //草稿箱
    public function draft() {
        //分页开始
        $count = M('blog')->where(array(
            'sta' => '0',
            'uid' => session('id')
        ))->count(); // 查询满足要求的总记录数
        $page  = new \Think\Page($count, 12);
        $page->setConfig('header', '条数据');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        $page->rollPage = 3; //控制页码数量
        $show           = $page->show(); // 分页显示输出
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = M('blog')->where(array(
            'sta' => '0',
            'uid' => session('id')
        ))->order('time DESC')->select();
        $this->assign('blog', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        $this->display();
    }
    
    //查看日志
    public function look() {
        $id = (int) $_GET['id'];
        M('blog')->where(array(
            'id' => $id
        ))->setInc('visits', 1);
        $this->lookblog = M('blog')->where(array(
            'id' => $id
        ))->select();
        
        //显示留言
        //分页开始
        $count = M('comment')->where(array(
            'del' => 0
        ))->where(array(
            'bid' => $id
        ))->count(); // 查询满足要求的总记录数
        $page  = new \Think\Page($count, 8);
        $page->setConfig('header', '条评论');
        $page->setConfig('prev', '<');
        $page->setConfig('next', '>');
        $page->setConfig('first', '<<');
        $page->setConfig('last', '>>');
        $page->setConfig('theme', '%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span>共计 %TOTAL_ROW% %HEADER%</span>');
        $page->rollPage = 3; //控制页码数量
        $show           = $page->show(); // 分页显示输出
        $comment        = D('CommentView');
        $limit          = $page->firstRow . ',' . $page->listRows;
        $list           = $comment->where(array(
            'bid' => $id
        ))->where(array(
            'del' => 0
        ))->order('time DESC')->limit($limit)->select();
        $this->assign('comment', $list); // 赋值数据集
        $this->assign('page', $show); // 赋值分页输出
        
        //显示赞
        $topview   = D('TopView');
        $this->top = $topview->where(array(
            'bid' => $id
        ))->select();
        $topa      = M('top')->where(array(
            'bid' => $id
        ))->where(array(
            'uid' => session('id')
        ))->select();
        $uid       = $topa[0]['uid'];
        $this->assign('deltop', $uid); //取消赞
        //提示：用点top的time字段来判断该周是否已赞过
        $this->display();
    }
    
    //写日志
    public function writeblog() {
        $this->display();
    }
    //保存日志表单
    public function savedraft() {
        $data = array(
            'title' => $_POST['title'],
            'bzzj' => $_POST['bzzj'],
            'xzjh' => $_POST['xzjh'],
            'yjfk' => $_POST['yjfk'],
            'uid' => session('id'),
            'author' => session('name'),
            'time' => time(),
            'sta' => '0'
        );
        $result = M('blog')->add($data);

        if ($result) {
            $this->redirect('Blog/draft');
        } else {
            $this->error('保存失败');
        }
    }
    
    //删除日志
    public function del() {
        $id = (int) $_GET['id'];

        $rel = M('blog')->where(array(
            'id' => $id
        ))->setField('sta', 2);

        if ($rel) {
            $this->redirect('Index/index');
        } else {
            $this->error('删除失败');
        }
    }
    
    //发布日志
    public function publish() {
        $id   = (int)$_GET['id'];
        $data = array(
            'id' => $id,
            'sta' => 1,
            'time' => time()
        );
        $rel = M('blog')->save($data);

        if ($rel) {
            $this->redirect('Index/index');
        } else {
            $this->error('发布失败');
        }
    }
    
    //编辑日志
    public function edit() {
        $id   = (int) $_GET['id'];
        $rbac = M('blog')->where(array(
            'id' => $id
        ))->find();

        if ($rbac['uid'] == session('id')) {
            $this->blog = M('blog')->where(array(
                'id' => $id
            ))->select();
            $this->display('writeblog');
        } else {
            $this->error('你无法编辑别人的文章');
        }
    }
    
    //编辑日志提交表单
    public function editpost() {
        $data         = $_POST;
        $data['time'] = time();
        if (M('blog')->where(array(
            'id' => $_POST['id']
        ))->save($data)) {
            $this->redirect('Blog/draft');
        } else {
            $this->error('修改失败');
        }
    }
    
    //评论表单处理
    public function addcomment() {
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
        if (M('comment')->add($data)) {
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
    
    //删除留言
    public function delcomment() {
        $id = (int) $_GET['id'];
        if (M('comment')->where(array(
            'id' => $id
        ))->save(array(
            'del' => '1'
        ))) {
            $this->success('删除成功');
        } else {
            $this->error('删除失败');
        }
    }
    
    //点赞表单
    public function addtop() {
        if (!IS_AJAX)
            $this->error('页面不存在');
        
        $data = array(
            'bid' => I('bid'),
            'uid' => I('uid'),
            'time' => time()
        );
        if (M('top')->add($data) and M('blog')->where(array(
            'id' => $data['bid']
        ))->setInc('top', 1)) {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-check"></i> 点赞成功',
                'status' => 1
            ), 'json');
        } else {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-remove"></i> 点赞失败,请重试',
                'status' => 0
            ), 'json');
        }
        
    }
    
    //删除赞表单
    public function deltop() {
        if (!IS_AJAX)
            $this->error('页面不存在');
        
        $data = array(
            'bid' => I('bid'),
            'uid' => I('uid'),
            'time' => time()
        );
        if (M('top')->where(array(
            'bid' => $data['bid']
        ))->where(array(
            'uid' => $data['uid']
        ))->delete() and M('blog')->where(array(
            'id' => $data['bid']
        ))->setDec('top', 1)) {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-check"></i> 取消成功',
                'status' => 1
            ), 'json');
        } else {
            $this->ajaxReturn(array(
                'info' => '<i class="fa fa-remove"></i> 取消失败,请重试',
                'status' => 0
            ), 'json');
        }
        
    }
    
}