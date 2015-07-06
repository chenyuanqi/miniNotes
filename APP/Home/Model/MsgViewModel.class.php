<?php

namespace Home\Model;


use Think\Model\ViewModel;

class MsgViewModel extends ViewModel{
    protected $viewFields = array(
        'msg' => array('id','uid','content','time','del','_type'=>'LEFT'),
        'user' => array('name','img','_on'=>'user.id=msg.uid'),
    );
}