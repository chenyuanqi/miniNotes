<?php
return array(
	'DB_TYPE' =>  'mysql',
    'DB_HOST' =>  'localhost',
    'DB_NAME' =>  'mininotes',
    'DB_USER' =>  'root',
    'DB_PWD'  =>  '',
    'DB_PORT'  =>  '3306',
    'DB_PREFIX' =>  'zv_',

    'SHOW_PAGE_TRACE' => true,  //开启页面调试模式

	'TMPL_EXCEPTION_FILE' => 'Public:error', // 定义公共错误模板
    'TMPL_ACTION_ERROR' => 'Public:error', // 默认错误跳转对应的模板文件
    'TMPL_ACTION_SUCCESS' => 'Public:success', //成功页面
);