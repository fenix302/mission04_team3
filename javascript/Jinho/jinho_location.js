// 네비게이션 슬라이드 기능
$(document).ready(function(){
    $(".navi li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    });
    $(".navi li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();
    })
});


