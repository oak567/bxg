
define(['jquery', 'template' ,'cookie'], function ($,template) {
    // 检测用户是否登录，如果没有登录则跳转至登录页

    // 如何检测用户是否登录了呢？

    // 当存了一个session后，浏览器会设置一个名字叫PHPSESSID的cookie

    // 只要检测PHPSESSID是否存就可判断用户是否登录过

    // 通过document.cookie可以读取本地存的cookie
    // if(document.cookie.indexOf('PHPSESSID') != -1) {
        // 登录过
    // } else {
        // 没有登录，跳转至登录页面
        // 除了login页面自身外都需要检测
        // 如何得知当前是不是login
        // location.href = '/login';
    // }

    // 浏览器提供了location这个BOM对象，可以获得地址的信息
    // for(var key in location) {
    //     console.log(key + '->' + location[key])
    // }

    // 检测用户是否登录
    if(document.cookie.indexOf('PHPSESSID') == -1 && location.pathname != '/login') {
        location.href = '/login';
    }

    // 获取用户的登录信息(被记录在了cookie中)
    var loginfo = $.cookie('loginfo') && JSON.parse($.cookie('loginfo'));
    // 将获取到的信息显示在页面中
    // console.log(loginfo);
    // $('.aside .profile img').attr('src',loginfo.tc_avatar);
    // $('.aside .profile h4').text(loginfo.tc_name);
    // 
    // // 基于模板名渲染模板
    // 第一个参数是模板所在DOM标签的ID
    // 第二个参数是模板所需的数据（对象类型）
    // template(filename, data);


    // // 将模板源代码编译成函数
    // 第一个参数是字符串形式的模板
    // 第二个参数是配置选项，可以省略
    // template.compile(source, options);
    // 
    // var tpl='<h1><%= name %></h1>';
    // var data={name:'zs'};
    // var render=template.compile(tpl);
    // var html=render(data);
    // console.log(html);

    // // 将模板源代码编译成函数并立刻执行
    // template.render(source, data, options);
        
    var source='<div class="avatar img-circle">\
                    <img src="<%= tc_avatar %>">\
                </div>\
                <h4><%= tc_name %></h4>';
    var render=template.compile(source);
    var html=render(loginfo);
    $('.aside .profile').append(html);

    // 退出登录
    $('#logout').on('click', function () {

        // /api http://api.botue.com
        $.ajax({
            url: '/api/logout',
            type: 'post',
            success: function (info) {
                if(info.code == 200) {
                    alert('退出成功!');
                    location.href = '/login';
                }
            }
        })
    });

})