const endNum = document.querySelector("#end-num");
const setRange = document.querySelector("#set-range");
const guessNum = document.querySelector("#guess-num");
const guessBtn = document.querySelector("#guess-btn");
const guessResult = document.querySelector("#guess-result");
const guessResultTxt = document.querySelector("#guess-result-txt");

function handleRange(event) {
  endNum.innerText = `Generate a number between 0 and `;
}

function handleInputValue(event) {
  const machine = Math.floor(Math.random() * setRange.value) + 1;
  guessResult.innerText = `You chose: ${guessNum.value}, the machine chose: ${machine}`;

  if (parseInt(guessNum.value) === machine) {
    if (!guessResultTxt.classList.contains("won"))
      guessResultTxt.classList.add("won");

    guessResultTxt.innerText = "You won!";
  } else {
    if (guessResultTxt.classList.contains("won"))
      guessResultTxt.classList.remove("won");

    guessResultTxt.innerText = "You lost!";
  }
}

function init() {
  setRange.addEventListener("input", handleRange);
  setRange.addEventListener("change", handleRange);
  guessBtn.addEventListener("click", handleInputValue);
}

init();
