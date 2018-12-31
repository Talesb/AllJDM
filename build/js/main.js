
$(document).ready(function () {

    setActivePage();
    loadCarPanels();
    setCarBrandButtonActive();
});


function setActivePage() {
    var link = location.pathname.split("/")

    if (link.length < 3 || link[2].includes('index')) {
        $("#homeAnchor").addClass("text-dark");
        $("#aboutAnchor").removeClass("text-dark");
        $("#projectAnchor").removeClass("text-dark");
        $("#contactAnchor").removeClass("text-dark");

    } else {
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
        }
    }

}


function loadCarPanels() {
    $('#carsPanel').load('panelNissan.html');
}


function setCarBrandButtonActive() {
    $('#nissanButton').click(function () {
        $("#nissanButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelNissan.html');
    });

    $('#toyotaButton').click(function () {
        $("#toyotaButton").addClass("active");
        $("#nissanButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelToyota.html');
    });

    $('#subaruButton').click(function () {
        $("#subaruButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#nissanButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelSubaru.html');
    });

    $('#hondaButton').click(function () {
        $("#hondaButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#nissanButton").removeClass("active");

        $('#carsPanel').load('panelHonda.html');
    });



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