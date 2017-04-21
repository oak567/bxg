define(['jquery'],function($){
	return{
		setMenu:function(key){
			$('.navs a[href="'+key+'"]')
			.addClass('active')
			.parents('ul').show();
		},
		qs:function(key){
			var search=location.search.slice(1).split('$'),
			o={};
			for(var i=0;i<search.length;i++){
				var temp=search[i].split('=');
				o[temp[0]]=temp[1];
			}
			return o[key];
		}
	}
})