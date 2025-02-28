function toggleOnOffSwitch(color) {
  document.body.style.backgroundColor = color;
}

const themeBtn = document.getElementById("Toggle-On-Off-Btn");
const bulbImage = document.getElementById("bulb");
themeBtn.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  console.log(currentColor);

  if (!currentColor || currentColor === "black") {
    themeBtn.innerText = "Turn OFF";
    toggleOnOffSwitch("white");
    bulbImage.src = "./images/BulbON.png";
  } else {
    themeBtn.innerText = "Turn ON";
    toggleOnOffSwitch("black");
    bulbImage.src = "./images/BulbOFF.png";
  }
});
