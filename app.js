"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let b = $('#numberInput').val();

        $('.textbox').empty();

        for (let i = 1; i <= b; i++) {
            $('.textbox').append(`<input type = "text" value = "${b}">`)
        }

    });
});


