let interaction12 = document.querySelector('a:nth-of-type(12)')

interaction12.addEventListener('click', jumpHandler)
interaction12.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction12.classList.toggle('jump')
}

//  -----------------------
let interaction1 = document.querySelector('a:nth-of-type(1)');

interaction1.addEventListener('mouseenter', () => {
  interaction1.classList.toggle('flip');
});

interaction1.addEventListener('mouseleave', () => {
  interaction1.classList.toggle('flip');
});