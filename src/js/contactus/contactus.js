
$(document).ready(function () {

    loadStates();
    loadCity();

    $('#inputState').change(function () {
        $('#inputCity').empty();
        loadCity();
    });


});

function loadStates() {
    states.forEach(function (obj) {
        $('#inputState').append($('<option>', { value: obj.abbreviation, text: obj.name }));

    })
}

function loadCity() {
    states.forEach(function (obj) {
        if ($('#inputState').val() === obj.abbreviation) {
            obj.cities.forEach(function (city) {
                $('#inputCity').append($('<option>', { value: city, text: city }));
            })

        }

    })
}