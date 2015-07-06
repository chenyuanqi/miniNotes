<?php
/**
 * 输出字符串、打印数组 #Output
 * @param  String | Array   $var      要打印输出的对象
 * @param  number           $module   模式, 默认为1, 其他则以封装好的 dump 方法
 * @return $Str (String)
 * @author cyq <chenyuanqi90s@163.com>
 */
function O($var, $module = null) {
    H();

    echo '<div style="color: #F16B17; font-family: georgia, verdana, tahoma, arial, sans-serif; font-size: 13px; width: 980px; min-width: 600px; line-height: 23px;margin: 0 auto;padding: 16px; background: #f2f2f2; word-break: break-word;">';

    if (!is_array($var)) {
    	echo '<h3 style="color: #0f9c7c;">Happy programming！您要输出的变量信息如下：</h3><pre>';
        var_dump($var); 
    } else {
        echo '<h3 style="color: #0f9c7c;">Happy programming！您要输出的数组信息如下：</h3><pre>';
        print_r($var);
    }

    echo '</pre></div>';
    !is_null($module) && exit();
}


/**
 * 调试输出sql语句、sql错误 #Output
 * @param  String    		$tableName 调试的数据表名
 * @param  number           $module    模式, 默认为 null(不中止后面的程序执行)，为 's'(或其他) 时执行终止
 * @return $Str (String)
 * @author cyq <chenyuanqi90s@163.com>
 */
function _sql($tableName, $module = null) {
	H();

	$str = '<div style="color: #F16B17; font-family: georgia, verdana, tahoma, arial, sans-serif; font-size: 13px; width: 980px; min-width: 600px; line-height: 23px;margin: 0 auto;padding: 16px; background: #f2f2f2; word-break: break-word;">';
	$str .= '<h3 style="color: #0f9c7c;">嘿！您正在执行的 sql 语句：</h3>' . M($tableName)->_sql();
	$err = M($tableName)->getDbError();
    $err && $str .= '<hr /><h3 style="color: red;">So Sorry! sql 语句出错：</h3>' . $err;
    $str .= '</div>';
    echo $str;
	if (!is_null($module)) {
        exit();
    }
}

/**
 * 输出 Php 全局变量 #Output 『TP』 
 * @param  number           $keyword    关键字，默认输出 REQUEST
 * @param  string           $module     默认 null 不中止后面程序，为 's'(或其他) 时执行终止
 * @return $Str (String)
 * @author cyq <chenyuanqi90s@163.com>
 */
function P($keyword = 'all', $module = null) {
    H();
    
    switch ($keyword) {
        case 'all':
            var_dump($_REQUEST);
            break;
        
        case 'g':
            var_dump($_GET);
            break;

        case 'p':
            var_dump($_POST);
            break;

        case 's':
            var_dump($_SESSION);
            break;

        case 'c':
            var_dump($_COOKIE);
            break;

        case 'f':
            var_dump($_FILES);
            break;
    }

    !is_null($module) && exit();
}


/**
 * 防止输出乱码
 * @author cyq <chenyuanqi90s@163.com>
 */
function H() {
	header("content-type:text/html;charset=utf-8");
}


/**
 * 日期转换 （2015-06-01 => 2015,05,01）
 * @param  date  	$date      要转换的日期
 * @return String   转换后的日期
 * @author cyq <chenyuanqi90s@163.com>
 */
function transDate($date) {
	$newDate = '';

	$dateArr = explode('-', $date);
	$newMonth= intval($dateArr[1]) - 1;
	if(10 > $newMonth) {
		$newMonth = '0'.$newMonth;
	}

	return $dateArr[0].','.$newMonth.','.$dateArr[2];
}



/**
 * 加密解密
 * @param  string   $key          要加密或解密的字符串
 * @param  string   $string       二级加密或解密的字符串
 * @param  decrypt  $decrypt      是否加密
 * @return decrypted | encrypted  #加密/解密后的字符串
 * @author cyq <chenyuanqi90s@163.com>
 */
function encryptDecrypt($key, $string, $decrypt){
    if($decrypt){
        $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($string), MCRYPT_MODE_CBC, md5(md5($key))), "12");
        return $decrypted;
    }else{
        $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $string, MCRYPT_MODE_CBC, md5(md5($key))));
        return $encrypted;
    }
}

// 星期大写
function _week_uc($week) {
	switch ($week) {
		case 1:
			$return = '一';
			break;
		
		case 2:
			$return = '二';
			break;

		case 3:
			$return = '三';
			break;

		case 4:
			$return = '四';
			break;

		case 5:
			$return = '五';
			break;

		case 6:
			$return = '六';
			break;

		default:
			$return = '日';
			break;
	}

	return $return;
}

// 添加日程
function addform(){
	$date = $_GET['date'];
	$enddate = isset($_GET['end'])?$_GET['end']:"";
	if($date==$enddate) $enddate='';
	if(empty($enddate)){
		$display = 'style="display:none"';
		$enddate = $date;
		$chk = '';
	}else{
		$display = 'style=""';
		$chk = 'checked';
	}
	$enddate = empty($_GET['end'])?$date:$_GET['end'];
}

// 编辑日程
function editform($id){
	$query = mysql_query("select * from calendar where id='$id'");
	$row = mysql_fetch_array($query);
	if($row){
		$id = $row['id'];
		$title = $row['title'];
		$starttime = $row['starttime'];
		$start_d = date("Y-m-d",$starttime);
		$start_h = date("H",$starttime);
		$start_m = date("i",$starttime);
		
		$endtime = $row['endtime'];
		if($endtime==0){
			$end_d = 0;
			$end_chk = '';
			$end_display = "style='display:none'";
		}else{
			$end_d = date("Y-m-d",$endtime);
			$end_h = date("H",$endtime);
			$end_m = date("i",$endtime);
			$end_chk = "checked";
			$end_display = "style=''";
		}
		
		$allday = $row['allday'];
		if($allday==1){
			$display = "style='display:none'";
			$allday_chk = "checked";
		}else{
			$display = "style=''";
			$allday_chk = '';
		}
	}
}


/**
 * 生成随机字符串
 * @param  number   $length    生成的字符串长度
 * @return string              #返回{$length}位随机字符
 * @author cyq <chenyuanqi90s@163.com>
 */
function generateRandomString($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}