define(['jquery','../utils','template','validate','form','datepicker','language'],function($,utils,template){

	utils.setMenu('/teacher/index');

	var teacherManage=$('#teacherManage'),
		tc_id=utils.qs('tc_id'),
		html,tips;

	
	if(tc_id){//编辑
		$.ajax({
			tips:'修改成功',
			url:'/api/teacher/edit',
			type:'get',
			data:{tc_id:tc_id},
			success:function(info){
				info.result.btnText=' 修 改 ',
				info.result.title='讲师修改',
				info.result.action='/api/teacher/update',
				html=template('manageTpl',info.result);
				teacherManage.html(html);
				dealForm();
			}
		})

	}else{//添加
		tips:'添加成功',
		html=template('manageTpl',{
			btnText:' 添 加 ',
			title:'讲师添加',
			action:'/api/teacher/add'
		});
		teacherManage.html(html);
		dealForm();
	}



	function dealForm(){
		teacherManage.find('form').validate({
		
		onKeyup:true,
        sendForm:false,

		eachValidField:function () {

			$(this).next().addClass('glyphicon-ok').removeClass('glyphicon-remove')
            .parents('.form-group').addClass('has-success').removeClass('has-error');
		},
		eachInvalidField:function () {

			$(this).next().addClass('glyphicon-remove').removeClass('glyphicon-ok')
            .parents('.form-group').addClass('has-error').removeClass('has-success');
		},
		valid:function (){

			$(this).ajaxSubmit({
				// url:'/api/teacher/add',
				type:'post',
				success:function(info){
					console.log(info);
					if(info.code==200){
						alert(tips);
					}
				}
			})
		},
		description:{
			name:{
				required:'讲师姓名不能为空'
			},
			pass:{
				required:'讲师姓名不能为空',
				pattern:'密码是字母或数字，且小于6位'
			}
		}
	})
	}


	




	// $('#teacherManage').on('submit',function(){
	// 	var formData=$(this).serialize();
	// 	$.ajax({
	// 		url:'/api/teacher/add',
	// 		type:'post',
	// 		data:formData,
	// 		success:function(info){
	// 			console.log(info);
	// 		}
	// 	})



	// 	return false;
	// })
})
