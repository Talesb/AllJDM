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
