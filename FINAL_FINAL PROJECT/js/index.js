
$(document).ready(function() {
			$('#container').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
				sectionsColor: ['#C63D0F', '#1BBC9B', '#494949', '#bababa'],
				navigationPosition: 'right',
				navigationTooltips: ['First page', 'Second page', 'Third page', 'fourth'],
				responsiveWidth: 900,
				afterResponsive: function(isResponsive){
				}
			});
		});

/*nav*/
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( "h1" ).hide("fade");
$( ".menu" ).slideToggle( "linear", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});
$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "linear", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
$( "h1" ).show("fade");
});
});
/*end of nav*/
lightGallery(document.getElementById('lightgallery'));
lightGallery(document.getElementById('lightgallery2'));