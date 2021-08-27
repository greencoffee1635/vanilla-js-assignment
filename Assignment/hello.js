const background = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const startView = (background.style.backgroundColor = colors[0]);

function handleResize() {
  const backWidth = window.innerWidth;
  if (backWidth <= 200) {
    background.style.backgroundColor = colors[0];
  } else if (backWidth > 200 && backWidth <= 400) {
    background.style.backgroundColor = colors[1];
  } else if (backWidth > 400 && backWidth <= 600) {
    background.style.backgroundColor = colors[2];
  } else if (backWidth > 600 && backWidth <= 800) {
    background.style.backgroundColor = colors[3];
  } else if (backWidth > 800 && backWidth <= 1000) {
    background.style.backgroundColor = colors[4];
  }
}

window.addEventListener("resize", handleResize);
