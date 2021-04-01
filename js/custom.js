$(document).ready(function(){






// main div margin minus
$('.sidebarIconToggle').click(function(){
    $('#sidebarMenu').toggleClass('wellcome');
});

$('.cartBox').click(function(){
    $('#right-side-cart').toggleClass('wellcomeRight');
});


//Active product


$('.single-product .when-cart-hover').click(function(){
	if ( 0<num ) {
		$(this).addClass('proActive');
	}else{
		$(this).removeClass('proActive');
	}
  
});









// sidebar dropdown
$('.feat-btn').click(function(){
	$('#sidebarMenu ul .feat-show').toggleClass("show1");
	$('#sidebarMenu ul .first').toggleClass("rotate");
});

$('.serv-btn').click(function(){
	$('#sidebarMenu ul .serv-show').toggleClass("show2");
	$('#sidebarMenu ul .second').toggleClass("rotate");
});

// active
$('#sidebarMenu ul li').click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});








});