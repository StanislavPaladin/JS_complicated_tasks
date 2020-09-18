'use scrict';

const block = document.querySelector('.block');
const reset = document.querySelector('.reset');
const stop = document.querySelector('.stop');

let count =0;
let animation;
let stopBtn = false;




const getAnimated = () => {
    animation = requestAnimationFrame(getAnimated);
    count++;
    if (count < 750) {
        block.style.left = count*2 + 'px';
    } else {
        cancelAnimationFrame(animation);
    }
};



reset.addEventListener('click', () => {
    cancelAnimationFrame(animation);
    count = 0;
    block.style.top = 0;
    block.style.left = 0;
});

stop.addEventListener('click', () => {
    if (!stopBtn) {
        animation = requestAnimationFrame(getAnimated);
        stopBtn = true;
      } else {
        cancelAnimationFrame(animation);
        stopBtn = false;
      }
});