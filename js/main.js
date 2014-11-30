//Menu slide functions
$(document).ready(function(){
	$(".menu").click(function(){
		$(this).parent().next().slideToggle("slow");
	});
});