define(['jquery','../utils','template'],function($,utils,template){
	
	utils.setMenu('/teacher/index');

	$.ajax({
		url:'/api/teacher',
		type:'get',
		success:function(info){
			console.log(info);

			var html=template('teacherTpl',{teachers:info.result})
			$('#teacherList').find('tbody').html(html);
		}
	})
	
})