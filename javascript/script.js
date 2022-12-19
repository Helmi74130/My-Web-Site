let car = document.querySelector('.car')
let streamer = document.querySelector('.streamer')
let earphone = document.querySelector('.earphone')

window.addEventListener('scroll', ()=>{
  console.log(window.scrollY);
  let value = window.scrollY
  car.style.left = value*1.5 + 'px'
  streamer.style.left = value*1.5 + 'px'

  let deg = value/5
  earphone.style.transform = `rotate(${deg}deg)`;
  
})

/* 
*Allows you to move the carousel
 */
let slider = document.querySelector('.more');

let starting;
let scrollLeft;
let mouse = false;

function catchSlider(e) {
  starting = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  mouse = true;
};
function releaseSlider() {
  mouse = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouse) { return; };
  let x = e.pageX - slider.offsetLeft;
  let scroll = x - starting;
  slider.scrollLeft = scrollLeft - scroll;
  
});

slider.addEventListener('mousedown', catchSlider, false);
slider.addEventListener('mouseup', releaseSlider, false);
slider.addEventListener('mouseleave', releaseSlider, false);

/* 
 * This function allows to shift the carousel by 1px on each call
 */

let speed = 1;

function loopTime(){
  let sizeForScroll = slider.scrollLeft + slider.offsetWidth
  if ( sizeForScroll < slider.scrollWidth) {
    setTimeout(() => {
      slider.scrollLeft += speed;
      loopTime() 
    }, "50");
  }else{
    setTimeout(()=>{
      slider.scrollLeft = 0;
    loopTime();
    }, '5000');
    
  };
};

loopTime();

/* 
 * This function add class with intersect observe
 */

let clock = document.querySelector('.clock-img')
let bulb = document.querySelector('.bulb-img')
let cube = document.querySelector('.cubes-content')
let cube2 = document.querySelector('.cube-3')
let smile = document.querySelector('.smiley')

const observeClock = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
      clock.classList.add('shake');
  }
}, {
  threshold: 0.99
});

const observeBulb = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
      bulb.classList.add('rotate');
  }
}, {
  threshold: 0.99
});

const observeCube = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
      cube.classList.add('bounce-in-top');
      cube2.classList.add('bounce-in-top-2');
  }
}, {
  threshold: 0.3
});

const observeSmile = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
      smile.classList.add('roll-in-right');
  }
}, {
  threshold: 0.1
});

observeClock.observe(clock);
observeBulb.observe(bulb);
observeCube.observe(cube);
observeSmile.observe(smile);
