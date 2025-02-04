"use strict";

const outbox = document.getElementById('outbox');
const inbox = document.getElementById('inbox');

outbox.addEventListener('mouseenter', () => {
    outbox.classList.add('green');
    outbox.classList.remove('white');
});

inbox.addEventListener('mouseenter', () => {
    inbox.classList.add('red');
    inbox.classList.remove('white');
    outbox.classList.add('white');
    outbox.classList.remove('green');
});

inbox.addEventListener('mouseleave', () => {
    inbox.classList.add('white');
    inbox.classList.remove('red');
    outbox.classList.add('green');
    outbox.classList.remove('white');
});

outbox.addEventListener('mouseleave', () => {
    outbox.classList.add('white');
    outbox.classList.remove('green');
    inbox.classList.add('white');
    inbox.classList.remove('red');
});
