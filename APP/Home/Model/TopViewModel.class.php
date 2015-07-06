<?php

namespace Home\Model;


use Think\Model\ViewModel;

class TopViewModel extends ViewModel{
    protected $viewFields = array(
        'top' => array('bid','uid','_type'=>'LEFT'),
        'user' => array('name','_on'=>'user.id=top.uid'),
    );
}