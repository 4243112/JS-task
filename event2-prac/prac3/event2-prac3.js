"use strict";

document.addEventListener('mousemove', (event) => {
    const xCoordInput = document.getElementById('x-coord');
    const yCoordInput = document.getElementById('y-coord');
    const x = event.clientX;
    const y = event.clientY;
    xCoordInput.value = `X: ${x}`;
    yCoordInput.value = `Y: ${y}`;
});

