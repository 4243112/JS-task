"use strict";
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

function addPost() {
    const nickname = document.getElementById('nickname').value;
    const content = document.getElementById('content').value;
    const posts = document.getElementById('posts');

    const now = new Date();
    const time = now.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<strong>${nickname}</strong> (${time})<p>${content}</p>`;
    
    posts.insertBefore(post, posts.firstChild);

    document.getElementById('nickname').value = '';
    document.getElementById('content').value = '';
}
