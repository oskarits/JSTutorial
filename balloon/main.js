'use strict';

let b = document.getElementById('balloon');
let s = this.getComputedStyle(b, null).getPropertyValue('font-size');
s = parseInt(s);
const change = font => {
  s = font;
  b.style.fontSize = s + 'px';
};

const size = (event) => {
  if (event.key == 'ArrowUp') {
    console.log('U');
    if (s > 150) {
      b.innerHTML = '💥';
      document.body.removeEventListener('keydown', size);
    } else { 
      change(s * 1.1);
    };
  } else if (event.key == 'ArrowDown') {
    console.log('D');
    change(s * 0.9);
  };
  console.log(s);
};

document.body.addEventListener('keydown', size); 
