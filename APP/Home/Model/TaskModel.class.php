<?php

namespace Home\Model;


use Think\Model;

class TaskModel extends Model{
    /**
     * 添加/编辑任务时的验证
     * @author cyq <chenyuanqi90s@163.com>
     */
    public function taskValidate($arr, $modify = false){
        // 任务 ID 是否存在
        $validateId = M('task')->where(array(
            'program_id' => $arr['program_id'],
            'task_code'  => $arr['task_code']
        ))->find();

        if ($validateId  && !$modify) {
            return '任务编号不可复制';
        }
        if (!$validateId && $modify) {
            return '不能更新不存在的记录';
        }
        
        // 开始时间 和 结束时间是否在项目范围内
        $program = M('program')->field('start_time, end_time')->where(array(
            'id' => $arr['program_id']
        ))->find();

        $program_start = strtotime($program['start_time']);
        $program_end   = strtotime($program['end_time']);
        $task_start    = strtotime($arr['start_date']);
        $task_end      = strtotime($arr['end_date']);
        if ($task_start > $program_end || $task_start < $program_start) {
            return '开始时间必须在 '.$program['start_time'].' 与 '.$program['end_time'].' 之间';
        }
        if ($task_end < $program_start || $task_end > $program_end) {
            return '结束时间必须在 '.$program['start_time'].' 与 '.$program['end_time'].' 之间';
        }
        // 完成率是否在 0 ~ 100
        if ($arr['percentage'] > 100 || $arr['percentage'] < 0) {
            return '完成率务必在 0 ~ 100 之间';
        }
    }
}
