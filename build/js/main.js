
$(document).ready(function () {

    setActivePage();


});


function setActivePage() {
    var link = location.pathname.split("/")

    if (link.length<3) {
        $("#homeAnchor").addClass("text-dark");
        $("#aboutAnchor").removeClass("text-dark");
        $("#projectAnchor").removeClass("text-dark");
        $("#contactAnchor").removeClass("text-dark");

    }else{
    if (link[2].includes('about')) {
        $("#aboutAnchor").addClass("text-dark");
        $("#homeAnchor").removeClass("text-dark");
        $("#projectAnchor").removeClass("text-dark");
        $("#contactAnchor").removeClass("text-dark");
    }
    if (link[2].includes('project')) {
        $("#projectAnchor").addClass("text-dark");
        $("#homeAnchor").removeClass("text-dark");
        $("#aboutAnchor").removeClass("text-dark");
        $("#contactAnchor").removeClass("text-dark");
    }
    if (link[2].includes('contact')) {
        $("#contactAnchor").addClass("text-dark");
        $("#homeAnchor").removeClass("text-dark");
        $("#aboutAnchor").removeClass("text-dark");
        $("#projectAnchor").removeClass("text-dark");
    }}


}
// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});