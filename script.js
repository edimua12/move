const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const yesBtnRect = yesBtn.getBoundingClientRect();
  const buttonWidth = yesBtnRect.width;
  const buttonHeight = yesBtnRect.height;

  const adjustedX = Math.min(mouseX - buttonWidth / -3, window.innerWidth);
  const adjustedY = Math.min(
    mouseY - buttonHeight / 6,
    window.innerHeight - buttonHeight
  );

  yesBtn.style.left = adjustedX + "px";
  yesBtn.style.top = adjustedY + "px";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
