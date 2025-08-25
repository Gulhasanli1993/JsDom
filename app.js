"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$('input').trim(val()) == '') {
            let a = b => {
                for (let b = 0; i < b; i++) { $('.minibox').append(`<h2>${b}</h2>`); }
            }
            let v = f => Number(a) ? $('.minibox').append(`<h2>${b}</h2>`) : $('.minibox').append(`<h2>${f}</h2>`);
            v($('input').val());
        }
        a($('input').val())

    })
});