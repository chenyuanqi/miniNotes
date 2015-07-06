<?php

namespace Home\Controller;


use Think\Controller;

class LoginController extends Controller {
    // 显示登录页面
    public function index() {

        $this->display();
    }
    
    //登陆信息判断
    public function loginAction() {
        if (IS_POST) {

            $username = I('post.username');
            $pwd      = I('post.password', '', 'md5');
            $user     = M('user')->where(array(
                'username' => $username
            ))->find();

            if (!$user || ($user['password'] != $pwd)) {
                $this->error('帐号或者密码错误');
            }
            ;
            $data = array(
                'id' => $user['id'],
                'logintime' => time(),
                'loginip' => get_client_ip()
            );
            M('user')->save($data);
            
            session('id', $user['id']);
            session('username', $user['id']);
            session('logintime', date('Y-m-d H:i:s', $user['logintime']));
            session('loginip', $user['loginip']);
            session('admin', $user['admin']);
            session('name', $user['username']);

            $this->redirect('Index/index');
        }
        
    }
}