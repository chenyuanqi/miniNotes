<?php

namespace Home\Controller;


use Think\Controller;

class UserController extends CommonController {
    
    public function index() {
        //分配视图
        $id              = (int) session('id');
        $this->user_data = M('user')->where(array(
            'id' => $id
        ))->select();
        $this->display();
    }


    public function datapost() {
        $upload           = new \Think\Upload(); // 实例化上传类
        $upload->maxSize  = 205800; // 设置附件上传大小
        $upload->exts     = array(
            'jpg',
            'gif',
            'png',
            'jpeg'
        ); // 设置附件上传类型
        $upload->rootPath = './Public/'; // 设置附件上传根目录
        $upload->savePath = '/Uploads/'; // 设置附件上传（子）目录
        // 上传文件
        $info             = $upload->uploadOne($_FILES['img']);
        if (!$info) { // 上传错误提示错误信息
            $data = array(
                'name' => $_POST['name'],
                'sex' => (int) $_POST['sex'],
                'tel' => $_POST['tel'],
                'email' => $_POST['email'],
                'dep' => (int) $_POST['dep'],
                'content' => $_POST['content']
            );
        } else { // 上传成功
            $data = array(
                'name' => $_POST['name'],
                'sex' => (int) $_POST['sex'],
                'tel' => $_POST['tel'],
                'email' => $_POST['email'],
                'dep' => (int) $_POST['dep'],
                'content' => $_POST['content'],
                'img' => '/Public' . $info['savepath'] . $info['savename']
            );
        }
        
        //编辑个人资料
        $id['id'] = $_POST['id'];
        $User     = M('user');
        if ($User->where($id)->save($data)) {
            $this->redirect('User/index');
        } else {
            $this->error('保存失败');
        }
    }


    //更改密码
    public function changgepwd() {
        $this->display();
    }


    //更改密码表单
    public function pwdpost() {
        //对表单数据进行MD5加密
        $password = I('password', '', 'md5');
        $newpws   = I('newpws', '', 'md5');
        $newpwss  = I('newpwss', '', 'md5');
        //把要写入的数据转换成数组
        $data     = array(
            'password' => $newpwss
        );
        
        $user = M('user')->where(array(
            'id' => session('id')
        ))->find();
        //判断输入的密码是否正确
        if ($newpws != $newpwss || $user['password'] != $password) {
            $this->error('旧密码错误或者新密码不一致');
        } else {
            //写入密码
            if (M('user')->where(array(
                'id' => session('id')
            ))->save($data)) {
                $this->success('修改成功');
            } else {
                $this->error('修改失败');
            }
        }
    }


    //添加用户视图
    public function adduser() {
        if (session('admin') == '0') {
            $this->error('没有权限');
        } else {
            $this->display();
        }
    }


    //添加用户表单
    public function adduserpost() {
        if (!IS_POST)
            E('页面不存在');
        //对表单数据进行MD5加密
        $password  = I('password', '', 'md5');
        $verifypwd = I('verifypwd', '', 'md5');
        //把要写入的数据转换成数组
        $data      = array(
            'username' => $_POST['username'],
            'password' => $password,
            'name' => $_POST['username']
        );
        //判断两次输入的密码是否一致
        if ($password != $verifypwd) {
            $this->error('密码不一致');
        } else {
            //添加数据
            if (M('user')->add($data)) {
                $this->success('添加成功');
            } else {
                $this->error('添加失败');
            }
            
        }
    }

    
    //查看用户资料
    public function look() {
        $id         = (int) $_GET['id'];
        $this->look = M('user')->where(array(
            'id' => $id
        ))->select();
        $this->display();
    }


    // 发邮件
    public function sendEmail() {
        
        $this->display();
    }
    
}