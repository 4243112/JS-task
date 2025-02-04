"use strict";

function displaySelection() {
    var radios = document.getElementsByName('options');
    var selectedValue;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    document.getElementById('selection').innerText = selectedValue + 'が選択されました';
}
