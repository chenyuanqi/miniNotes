<?php

namespace Home\Controller;


use Think\Controller;

class CommonController extends Controller {
	
    //�Զ����У��ж����û�е�¼����ת����¼ҳ��
    public function _initialize() {
        if (!isset($_SESSION['id']) || !isset($_SESSION['username'])) {
            $this->redirect('Login/index');
        }
    }
}