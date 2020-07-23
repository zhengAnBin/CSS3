const scene = document.querySelector(".scene");
const squares = document.querySelectorAll(".square");
const count = document.querySelector(".count");
const min = 1;
const max = 20;
let counter = 8;

const init = () => {
  squares.forEach((square, index) => {
    if (index >= counter) {
      return;
    }
    square.style.opacity = 0.5;
  });
};

document.querySelector(".btn-add").addEventListener("click", () => {
  counter < max ? counter++ : max;
  count.innerText = counter;
  squares[counter - 1].style.opacity = 0.5;
});

document.querySelector(".btn-remove").addEventListener("click", () => {
  counter > min ? counter-- : min;
  count.innerText = counter;
  squares[counter - 1].style.opacity = 0;
});

document.querySelector(".btn-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

init();
