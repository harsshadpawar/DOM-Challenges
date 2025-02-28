function changeTextColor(color) {
  document.getElementById("titleH1").style.color = color;
}

redBtn.addEventListener("click", () => {
  const currentColor = document.getElementById("titleH1").style.color;
  console.log(currentColor);
  if (!currentColor || currentColor === "black") {
    changeTextColor("red");
  } else {
    changeTextColor("red");
  }
});

greenBtn.addEventListener("click", () => {
  const currentColor = document.getElementById("titleH1").style.color;
  console.log(currentColor);
  if (!currentColor || currentColor === "black") {
    changeTextColor("green");
  } else {
    changeTextColor("green");
  }
});

blueBtn.addEventListener("click", () => {
  const currentColor = document.getElementById("titleH1").style.color;
  console.log(currentColor);
  if (!currentColor || currentColor === "black") {
    changeTextColor("blue");
  } else {
    changeTextColor("blue");
  }
});

purpleBtn.addEventListener("click", () => {
  const currentColor = document.getElementById("titleH1").style.color;
  console.log(currentColor);
  if (!currentColor || currentColor === "black") {
    changeTextColor("purple");
  } else {
    changeTextColor("purple");
  }
});

resetBtn.addEventListener("click", () => {
  const currentColor = document.getElementById("titleH1").style.color;
  console.log(currentColor);
  if (!currentColor || currentColor === "black") {
    console.log("No chnages");
  } else {
    changeTextColor("black");
  }
});
