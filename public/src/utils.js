define(['jquery'],function($){
	return{
		setMenu:function(key){
			$('.navs a[href="'+key+'"]')
			.addClass('active')
			.parents('ul').show();
		}
	}
})