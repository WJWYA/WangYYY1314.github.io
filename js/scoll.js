jQuery(document).ready(function($){

    $('.menu1').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
    $('.back_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
    $('.menu2').click(function(){$('html,body').animate({scrollTop:$('.body_info2').offset().top-64+"px"}, 800);});
    $('.menu3').click(function(){$('html,body').animate({scrollTop:$('.body_info3').offset().top-64+"px"}, 800);});
    $('.menu4').click(function(){$('html,body').animate({scrollTop:$('.body_info4').offset().top-64+"px"}, 800);});
    $('.menu5').click(function(){$('html,body').animate({scrollTop:$('.body_info5').offset().top-64+"px"}, 800);});
    $('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.bottom').offset().top}, 800);});


});
$(window).scroll(function(){
    var t2= $(".body_info2").offset().top-$(window).scrollTop();
    var t3 =$(".body_info3").offset().top-$(window).scrollTop();
    var t4 = $(".body_info4").offset().top-$(window).scrollTop();
    var t5 =$(".body_info5").offset().top-$(window).scrollTop();
    var t6 =$(".body_info6").offset().top-$(window).scrollTop();
    if(t2>=64){
        $('.menu').removeClass('active');
        $('.menu.menu1').addClass('active');
    }

    if(t2<=64&&t3>=64){
        $('.menu').removeClass('active');
        $('.menu.menu2').addClass('active');
    }
    if(t3<=64&&t4>=64){
        $('.menu').removeClass('active');
        $('.menu.menu3').addClass('active');
    }
    if(t4<=64&&t5>=64){
        $('.menu').removeClass('active');
        $('.menu.menu4').addClass('active');
    }
    if(t5<=64&&t6>=64){
        $('.menu').removeClass('active');
        $('.menu.menu5').addClass('active');
    }
});