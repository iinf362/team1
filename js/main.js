//Menu slide functions
$(document).ready(function(){
	$(".menu").click(function(){
		$(this).parent().next().slideToggle("slow");
		$(".cont-custom").not($(this).parent().next()).slideUp("slow");
	});
});