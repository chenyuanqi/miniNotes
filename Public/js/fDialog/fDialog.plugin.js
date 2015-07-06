/* 修改 fDialog 有一些默认配置 */
$.fDialog.alert.defaults.buttons = ['确定'];
$.fDialog.alert.defaults.title = ['系统提示'];



/* 入场退场动画插件 */

//入场
$.fDialog.extend.init.animated = function($obj,opts){
	if(typeof opts.animated == 'string'){
		$obj.addClass('animated '+opts.animated);
		setTimeout(function(){
			$obj.removeClass('animated '+opts.animated);
		},1000);
	}
}

//退场
$.fDialog.extend.remove.animated = function($obj,opts){
	if(typeof opts.removeAnimated == 'string' && (opts.ie==0||opts.ie>9)){
		var time = 900;
		var arr = opts.removeAnimated.split('|');
		if(arr.length>1){
			arr[1] = parseInt(arr[1]);
			time = !isNaN(arr[1])?arr[1]:time;
		}
		$obj.addClass('animated '+arr[0]);
		setTimeout(function(){
			$obj.fDialog('remove',true);
		},time);
		return false;
	}
	return true;
}