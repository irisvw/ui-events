// ----------------------- INTERACTION ---
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// ----------------------- FRONTEND ----
let frontend = document.querySelector('a:nth-of-type(1)');

frontend.addEventListener('mouseenter', () => {
  frontend.classList.toggle('flip');
});

frontend.addEventListener('mouseleave', () => {
  frontend.classList.toggle('flip');
});

// ----------------------- DESIGN ---

let design = document.querySelector('a:nth-of-type(2)');

window.addEventListener('mousemove', (e) => {
  // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
  var rect = design.getBoundingClientRect();
  var x = e.clientX - (rect.left + 0.5 * rect.width);
  var y = e.clientY - (rect.top + 0.5 * rect.height);

  if (Math.abs(x) < 200 && Math.abs(y) < 200) {
    design.classList.add("bibber");
  } else if (design.classList.contains("bibber")) {
    design.classList.remove("bibber");
  }
}
);

// ----------------------- & ---

let ampersand = document.querySelector('a:nth-of-type(3)');
let root = document.documentElement;
let hue = 0;

// ----------------------- DEVELOPMENT ---

let development = document.querySelector('a:nth-of-type(4)');

addEventListener('keydown', (e) => {
  // ampersand
  hue += 15;
  root.style.setProperty('--hue', hue + "deg");

  // development
  if (e.shiftKey) {
    development.classList.toggle('shifted');
  }
})

// ----------------------- SPRINT-5---

let sprint5 = document.querySelector('a:nth-of-type(5)');

sprint5.addEventListener('dblclick', (e) => {
  sprint5.classList.toggle('drop'); 
});
