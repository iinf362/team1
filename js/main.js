//JQuery
//Menu slide functions
$(document).ready(function(){
	$(".menu").click(function(){
		$(this).parent().next().slideToggle("slow");
	});
});

//JavaScript
function searchGoogle() {
    var link = "http://www.google.com/#q="+document.forms["search"]["text-search"].value+"+site:"+{{site.url}};
    var googleLink = link.replace(" ", "+");
    document.search.action = googleLink;
    return true;
}