// if (event.target.checked) {
//   drinkSelect.disabled = false;
// } else {
//   drinkSelect.disabled = true;
// }
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const MY_TIME = 1000;
let timeoutId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  buttonStart: document.querySelector(".test"),
  buttonStop: document.querySelectorAll("[data-action=stop]"),
  myBody: document.querySelector("body"),
};

refs.buttonStart.addEventListener("click", changeBackground);
refs.buttonStop[0].addEventListener("click", cancelBackground);
function changeBackground(e) {
  refs.buttonStart.disabled = true;
  timeoutId = setInterval(() => {
    const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    const colorBody = colors[colorIndex];
    refs.myBody.style.backgroundColor = `${colorBody}`;
    console.log(colorBody);
  }, MY_TIME);
}
function cancelBackground() {
  clearInterval(timeoutId);
  refs.buttonStart.disabled = false;
}
