$(document).ready(function() {
	$(".nav_ico").click(function(){
		$(".main_nav").toggleClass("active");
	});
	$(".main_nav").click(function(){
		$(this).removeClass("active");
	});
	$( ".main_nav ul" ).click(function( event ) {
		event.stopImmediatePropagation();
	});	
});

