const progress = document.querySelector('.progress');
const tooltip = document.querySelector('.tooltip');
const miniPlayer = document.querySelector('.mini-player')
const miniPlayerOpenBtn = document.querySelector('.open')
const miniPlayerCloseBtn = document.querySelector('.close')
// tooltip
progress.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
},  true);
progress.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
}, true);

//miniPlayer implement
miniPlayerOpenBtn.addEventListener('click',() => {
    console.log('clicked')
    miniPlayer.classList.remove('floatingBtn')
})
miniPlayerCloseBtn.addEventListener('click',() => {
    miniPlayer.classList.add('floatingBtn')
})