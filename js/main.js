//JQuery
//Menu slide functions
$(document).ready(function(){
	$(".menu").click(function(){
		$(this).parent().next().slideToggle("slow");
	});
	
$(function() {
	$("#slideshow > div:gt(0)").hide();
		setInterval(function() { 
			$('#slideshow > div:first')
			    .fadeOut(1000)
			    .next()
			    .fadeIn(1000)
			    .end()
			    .appendTo('#slideshow');
			},  3000);
			
		});


//JavaScript
function searchGoogle() {
    var link = "http://www.google.com/#q="+document.forms["search"]["text-search"].value+"+site:http://iinf362.github.io/team1";
    var googleLink = link.replace(" ", "+");
    document.search.action = googleLink;
    return true;
}
