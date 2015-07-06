<?php

namespace Home\Model;


use Think\Model\ViewModel;

class CommentViewModel extends ViewModel{
	
    protected $viewFields = array(
        'comment' => array('id','bid','uid','content','time','del','_type'=>'LEFT'),
        'user' => array('name','img','_on'=>'user.id=comment.uid'),
    );
}