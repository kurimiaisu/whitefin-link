const el1 = document.getElementById('cr-1');
const c = document.querySelector('.c'); 
const animeGirl = document.querySelector('.interactive-img img'); 
const el2 = document.querySelector('#cr-2');
const el3 = document.getElementById('cr-3');
const el4 = document.getElementById('cr-4');

el1.onclick = function() {
    c.style.minHeight = '520px';
    animeGirl.src = 'assets/1.png';
};
el2.onclick = function() {
    c.style.minHeight = '720px';
    animeGirl.src = 'assets/2.png';
};
el3.onclick = function() {
    c.style.minHeight = '780px';
    animeGirl.src = 'assets/3.png';
};
el4.onclick = function() {
    c.style.minHeight = '835px';
    animeGirl.src = 'assets/4.png';
};