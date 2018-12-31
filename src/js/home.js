
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

