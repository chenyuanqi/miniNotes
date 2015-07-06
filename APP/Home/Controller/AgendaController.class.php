<?php

namespace Home\Controller;


use Think\Controller;

class AgendaController extends CommonController {
    // 我的日程
    public function index() {

        $this->display('');       
    }
    

    // ajax处理数据
    public function  ajax() {
    	$action = $_GET['action'];
		if ($action == 'add') { //增加
		    $events = stripslashes(trim($_POST['event'])); //事件内容
		    $events = mysql_real_escape_string(strip_tags($events), $link); //过滤HTML标签，并转义特殊字符

		    $isallday = $_POST['isallday']; //是否是全天事件
		    $isend = isset($_POST['isend']) ? $_POST['isend'] : ""; //是否有结束时间

		    $startdate = trim($_POST['startdate']); //开始日期
		    $enddate = trim($_POST['enddate']); //结束日期

		    $s_time = $_POST['s_hour'] . ':' . $_POST['s_minute'] . ':00'; //开始时间
		    $e_time = $_POST['e_hour'] . ':' . $_POST['e_minute'] . ':00'; //结束时间
		  	$endtime = 0;
		    if ($isallday == 1 && $isend == 1) {
		        $data['starttime'] = strtotime($startdate);
		        $data['endtime'] = strtotime($enddate);
		    } elseif ($isallday == 1 && $isend == "") {
		        $data['starttime'] = strtotime($startdate);
		    } elseif ($isallday == "" && $isend == 1) {
		        $data['starttime'] = strtotime($startdate . ' ' . $s_time);
		        $data['endtime'] = strtotime($enddate . ' ' . $e_time);
		    } else {
		        $data['starttime'] = strtotime($startdate . ' ' . $s_time);
		    }

		    $colors = array("#360", "#f30", "#06c");
		    $key = array_rand($colors);
		    $data['color'] = $colors[$key];

		    $data['isallday'] = $isallday ? 1 : 0;
		    $rel = M('calendar')->add($data);
		    if ($rel) {
		        echo '1';
		    } else {
		        echo '写入失败！';
		    }
		} elseif ($action == "edit") { //编辑
		    $id = intval($_POST['id']);
		    if ($id == 0) {
		        echo '事件不存在！';
		        exit;
		    }
		    $events = stripslashes(trim($_POST['event'])); //事件内容
		    $data['title'] = mysql_real_escape_string(strip_tags($events), $link); //过滤HTML标签，并转义特殊字符

		    $isallday = $_POST['isallday']; //是否是全天事件
		    $isend = $_POST['isend']; //是否有结束时间

		    $startdate = trim($_POST['startdate']); //开始日期
		    $enddate = trim($_POST['enddate']); //结束日期

		    $s_time = $_POST['s_hour'] . ':' . $_POST['s_minute'] . ':00'; //开始时间
		    $e_time = $_POST['e_hour'] . ':' . $_POST['e_minute'] . ':00'; //结束时间

		    if ($isallday == 1 && $isend == 1) {
		        $data['starttime'] = strtotime($startdate);
		        $data['endtime'] = strtotime($enddate);
		    } elseif ($isallday == 1 && $isend == "") {
		        $data['starttime'] = strtotime($startdate);
		        $data['endtime'] = 0;
		    } elseif ($isallday == "" && $isend == 1) {
		        $data['starttime'] = strtotime($startdate . ' ' . $s_time);
		        $data['endtime'] = strtotime($enddate . ' ' . $e_time);
		    } else {
		        $data['starttime'] = strtotime($startdate . ' ' . $s_time);
		        $data['endtime'] = 0;
		    }

		    $data['isallday'] = $isallday ? 1 : 0;
		    $data['id'] = $id;
		    $rel = M('calendar')->save($data);
		    if ($rel) {
		        echo '1';
		    } else {
		        echo '出错了！';
		    }
		} elseif ($action == "del") {
		    $id = intval($_POST['id']);
		    if ($id > 0) {
		    	$rel = M('calendar')->delete($id);
		        if ($rel) {
		            echo '1';
		        } else {
		            echo '出错了！';
		        }
		    } else {
		        echo '事件不存在！';
		    }
		} elseif ($action == "drag") {
		    $id = $_POST['id'];
		    $daydiff = (int) $_POST['daydiff'] * 24 * 60 * 60;
		    $minudiff = (int) $_POST['minudiff'] * 60;
		    $allday = $_POST['allday'];
		    $data = M('calendar')->find($id);
		    //echo $allday;exit;
		    if ($allday == "true") {
		        if ($data['endtime'] == 0) {
		        	$rel = M('calendar')->where(array(
		        		'id'=>$id))->setField('starttime', $data['starttime'] + $daydiff);
		        } else {
		        	$saveData['starttime'] = $data['starttime'] + $daydiff;
		        	$saveData['endtime'] = $data['endtime'] + $daydiff;
		        	$rel = M('calendar')->where(array(
		        		'id'=>$id))->save($saveData);
		        }
		    } else {
		        $difftime = $daydiff + $minudiff;
		        if ($data['endtime'] == 0) {
		        	$rel = M('calendar')->where(array(
		        		'id'=>$id))->setField('starttime', $data['starttime'] + $difftime);
		        } else {
		        	$saveData['starttime'] = $data['starttime'] + $difftime;
		        	$saveData['endtime'] = $data['endtime'] + $difftime;
		        	$rel = M('calendar')->where(array(
		        		'id'=>$id))->save($saveData);
		        }
		    }
		    if ($rel) {
		        echo '1';
		    } else {
		        echo '出错了！';
		    }
		} elseif ($action == "resize") {
		    $id = $_POST['id'];
		    $daydiff = (int) $_POST['daydiff'] * 24 * 60 * 60;
		    $minudiff = (int) $_POST['minudiff'] * 60;

		    $data = M('calendar')->find($id);
		    //echo $allday;exit;
		    $difftime = $daydiff + $minudiff;
		    if ($data['endtime'] == 0) {
		    	$rel = M('calendar')->where(array(
		        		'id'=>$id))->setField('endtime', $data['starttime'] + $difftime);
		    } else {
		    	$rel = M('calendar')->where(array(
		        		'id'=>$id))->setField('endtime', $data['endtime'] + $difftime);
		    }

		    if ($rel) {
		        echo '1';
		    } else {
		        echo '出错了！';
		    }
		} else {
		    
		}
    }


    // json数据
    public function json() {

		$datas = M('calendar')->select();
		foreach ($datas as $key => &$value) {
			$value['start'] = $value('Y-m-d H:i', $row['starttime']);
			$value['end'] = $value('Y-m-d H:i', $row['endtime']);
			$value['allDay'] = $value['allday'] == 1? true : false;

		}

		exit(json_encode($data));
    }


    // 添加、编辑日程
    public function event() {
    	$action = $_GET['action'];
		$id = isset($_GET['id'])?intval($_GET['id']):0;
		switch($action){
			case 'add':
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
				$this->display('Agenda/add');
				break;
			case 'edit':
				editform($id);
				$this->display('Agenda/edit');
				break;
		}
    }

}

