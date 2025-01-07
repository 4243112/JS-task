"use strict";
function applyStyle(styleClass) {
    let textbox = document.getElementById('textbox');
    let output = document.getElementById('output');
    output.textContent = textbox.value;
    output.className = ''; // 以前のクラスをクリア
    output.classList.add(styleClass);
}

function resetStyle() {
    let output = document.getElementById('output');
    output.textContent = "";
    output.className = ''; // クラスをクリア
}
