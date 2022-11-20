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
