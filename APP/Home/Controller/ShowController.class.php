<?php

namespace Home\Controller;


use Think\Controller;

class ShowController extends Controller {
    
    public function index() {
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

}