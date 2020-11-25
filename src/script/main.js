// menu opner script
$(document).ready(function(){
	$(".btnMenu").click(function(){
		$(this).toggleClass("active");
		$(".navMenu").toggleClass("active");
	});
});

// donation button script script
$(document).ready(function(){
	$(".donateBtn").click(function(){
		$(".donateBtn").removeClass("active");
		$(this).addClass("active");
	});

	$(".amountBtn").click(function(){
		$(".amountBtn").removeClass("active");
		$(this).addClass("active");
	});
});

// on scroll add bacground to header
$(document).ready(function(){

	$(window).scroll(function() {
		var windowScroll= $(window).scrollTop()
		
		if (windowScroll > 50) {
			$(".header").addClass("active");
		}else{
			$(".header").removeClass("active");
		}
	});
});