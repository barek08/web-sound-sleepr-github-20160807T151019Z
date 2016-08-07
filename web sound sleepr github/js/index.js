//enable tooltips to proof that JS is working just fine
//hover over the link

//$('#example').tooltip('show')

/*object.onload=function(){
document.getElementById('streamspage').style.display = "none";
}*/

//function changeDiv()
//{
//.getElementById('streamspage').style.display = "none";

 // hide body div tag
//}

$(document).ready(function(){   $('#streamspage').hide();
   $('#dashboardpage').show();
   $('#aboutpage').hide();
  $('#dashboardbutton').addClass("active");
   $('#streamsbutton').removeClass("active");
   $('#aboutbutton').removeClass("active");
$('#aboutbutton').click(function() {
    //$('#body1').show();
    $('#streamspage').hide();
   $('#dashboardpage').hide();
   $('#aboutpage').show();
  $('#dashboardbutton').removeClass("active");
   $('#streamsbutton').removeClass("active");
   $('#aboutbutton').addClass("active");
 });
$('#streamsbutton').click(function() {
    //$('#body1').show();
    $('#streamspage').show();
   $('#dashboardpage').hide();
   $('#aboutpage').hide();
  $('#dashboardbutton').removeClass("active");
   $('#streamsbutton').addClass("active");
   $('#aboutbutton').removeClass("active");
 });
$('#dashboardbutton').click(function() {
    //$('#body1').show();
  //$("p:last").removeClass("intro").addClass("main");
    $('#streamspage').hide();
   $('#dashboardpage').show();
   $('#aboutpage').hide();
  $('#dashboardbutton').addClass("active");
   $('#streamsbutton').removeClass("active");
   $('#aboutbutton').removeClass("active");
 });
//$(document).ready(function(){
  //  $("button").click(function(){$("p:last").removeClass("intro").addClass("main");});
//});
//Code to collapse the navigation bar on click
$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});
                             });