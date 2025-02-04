"use strict";

const element = document.querySelector('.mouse-element');

element.addEventListener('mouseenter', () => {
    element.textContent = 'Enter';
});

element.addEventListener('mouseleave', () => {
    element.textContent = 'Exit';
});

