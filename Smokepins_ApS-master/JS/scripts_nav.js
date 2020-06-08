const slider = document.getElementById('slider');
const burger = document.querySelector('header > span > i:nth-of-type(1)');
const close = document.querySelector('header > span > i:nth-of-type(2)');


burger.addEventListener('click', () => {
     slider.classList.toggle('active_slider');
     close.style.display = "block";
     burger.style.display = "none";
})

close.addEventListener('click', () => {
     slider.classList.toggle('active_slider');
     close.style.display = "none";
     burger.style.display = "block";
})
