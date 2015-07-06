<?php

namespace Home\Controller;


use Think\Controller;

class IndexController extends CommonController {
    
    public function index() {
        $p      = $_GET['p']; //取得提交的页数用作查询周开始日期，比如取得1就是这周，2就是上周。
        $np     = $p - 1; //把取得的页数-1用作查询周的截至时间。
        $t      = time(); //取得当前时间
        $beweek = date("w", $t); //获取当前时间的周
        if ($beweek == 0) {
            $beweek = '7';
        }
        ; //因为默认是礼拜天是0，这里的判断是当礼拜天的时候把它转换成7
        $day   = abs($p * 7 + $beweek); //计算get提交过来的页码*7天在加去当前星期就是指定星期的第一天，比如今天星期3，跳转到2个星期前，就是2*7=14，14再加3就等指定星期的礼拜一。
        $oday  = $day - 7; //把上面计算好的第一天-7就是最后一天了。
        $week  = strtotime(date('Y-m-d 23:59:59', strtotime('-' . $day . ' day'))); //获取指定周的第一天日期和时间
        $nweek = strtotime(date('Y-m-d 23:59:59', strtotime('-' . $oday . ' day'))); //获取指定周的最后天日期和时间

        $map['time'] = array(
            'between',
            array(
                $week,
                $nweek
            )
        ); //查询条件,在这个的时间内的查询条件
        $this->list  = M('blog')->where($map)->where(array(
            'sta' => 1
        ))->order('top DESC')->select(); //获取当前周的数据条数

        $next = $p + 1;
        if ($p <= '0') { //判断当前(GET)页数，免得出现负数的bug
            $this->assign('last', '0'); //上一页
            $this->assign('week', '本'); //上几周
        } else {
            $this->assign('last', $np); //上一页
            $this->assign('week', '前' . $p); //上几周
        }

        $this->assign('opentime', date('y-m-d H:i:s', $week)); //起始时间
        $this->assign('overtime', date('y-m-d H:i:s', $nweek)); //结束时间
        $this->assign('next', $next); //下一页
        $this->assign('beweek', $beweek); //今日星期几
        $this->display();
        
    }
    
    //退出登录并跳转到登录页面
    public function logout() {
        session_unset();
        session_destroy();
        $this->redirect('Login/index');
    }
    
    public function demo() {
        
        $demo = new \Org\Util\Date();
        $aaa  = $demo->numberToCh(7); // 判断是否闰年
        dump($aaa);
    }
}