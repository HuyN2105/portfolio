const path = document.querySelector('#LOGO path');
const length = path.getTotalLength();

path.style.strokeDasharray = length;

anime({
    targets: path,
    strokeDashoffset: [length, 0],
    easing: 'easeInOutQuad',
    duration: [3250, 250],
    direction: 'alternate',
    loop: true
});

anime({
    targets: '#loading p',
    width: [0, 164.83],
	easing: 'easeInOutQuad',
    delay: 1350,
    duration: 1500,
	endDelay: 750,
    direction: 'alternate',
    loop: true
})

function doneLoad(){
	setTimeout(()=>{
		anime({
			targets: '#loading-container',
			easing: 'easeInOutQuad',
			duration: 3500,
			translateX: '-85vw',
			complete: ()=>{ document.getElementById('loading-container').remove() }
		});
	}, 3750);
};