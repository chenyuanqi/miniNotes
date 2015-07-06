<?php

namespace Home\Model;


use Think\Model\ViewModel;

class ShacomViewModel extends ViewModel{
	
    protected $viewFields = array(
        'shacom' => array('id','bid','uid','content','time','del','_type'=>'LEFT'),
        'user' => array('name','img','_on'=>'user.id=shacom.uid'),
    );
}