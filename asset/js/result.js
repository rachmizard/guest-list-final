$("body").addClass("blue");
scrollReDraw();

$("#checkboxThreeInput").on("click", function(){
   $(".red,.blue").toggleClass("red").toggleClass("blue");
    scrollReDraw();
    $('.total').toggle('fast');
    $('.scdown').toggle('fast');
});

//Hack to force scroll redraw
function scrollReDraw() {
	$('body').css('overflow', 'hidden').height();
	$('body').css('overflow', 'auto');
}

$(document).ready(function(){
    /* Looping Button 
    =================*/
    $('#ToUp').click(function(){
        $("html, body").animate({ scrollTop: $("body").scrollTop() }, 1000);
    });
    $('#ToDown').click(function(){
       window.scrollTo(0,document.body.scrollHeight);
    });
});/* END */