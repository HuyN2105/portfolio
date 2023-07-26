const path = document.querySelector('#LOGO path');
const length = path.getTotalLength();

path.style.strokeDasharray = length;

anime({
  targets: path,
  strokeDashoffset: [length, 0],
  easing: 'easeInOutQuad',
  duration: [3500, 500],
  direction: 'alternate',
  loop: true
});

anime({
    targets: '#loading p',
    width: [0, 164.83],
    delay: 1500,
    duration: 2000,
    direction: 'alternate',
    loop: true
})