document.addEventListener("DOMContentLoaded", function () {
  // Get references to DOM elements
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");
  const digitalTime = document.getElementById("digital-time");
  const dateDisplay = document.getElementById("date");
  const container = document.querySelector(".container");

  // Add subtle animation to the container on load
  setTimeout(() => {
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
  }, 300);

  // Function to pad numbers with leading zeros
  function padZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  // Function to get formatted date
  function getFormattedDate() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName}, ${monthName} ${day}, ${year}`;
  }

  // Create tick marks for seconds
  function createTickMarks() {
    const tickMarksContainer = document.querySelector(".tick-marks");
    for (let i = 0; i < 60; i++) {
      const tick = document.createElement("div");
      tick.classList.add("tick");

      // Style major ticks (hours) differently
      if (i % 5 === 0) {
        tick.classList.add("major");
      }

      // Position the tick
      const angle = i * 6; // 6 degrees per second/tick
      tick.style.transform = `rotate(${angle}deg) translateY(-130px)`;

      tickMarksContainer.appendChild(tick);
    }
  }

  // Function to update the clock
  function updateClock() {
    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate smooth rotation angles for hands

    // Second hand: 6 degrees per second + small adjustment for milliseconds
    const secondDegrees = seconds * 6 + milliseconds * 0.006;

    // Minute hand: 6 degrees per minute + small adjustment for seconds
    const minuteDegrees = minutes * 6 + seconds * 0.1;

    // Hour hand: 30 degrees per hour + adjustment for minutes and seconds
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5 + seconds * 0.008333;

    // Apply rotation transforms to hands with smooth transitions
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;

    // Update digital time with flashing colon effect
    const formattedHours = padZero(hours);
    const formattedMinutes = padZero(minutes);
    const formattedSeconds = padZero(seconds);

    // Make the colon blink every second
    const separator = seconds % 2 === 0 ? ":" : " ";
    digitalTime.innerHTML = `${formattedHours}<span class="separator">${separator}</span>${formattedMinutes}<span class="separator">${separator}</span>${formattedSeconds}`;

    // Update date (once per minute is enough, but for simplicity we'll do it here)
    dateDisplay.textContent = getFormattedDate();

    // Create a pulsing effect for the center dot on every second
    if (seconds !== lastSecond) {
      const centerDot = document.querySelector(".center-dot");
      centerDot.classList.add("pulse");
      setTimeout(() => {
        centerDot.classList.remove("pulse");
      }, 500);
      lastSecond = seconds;
    }

    // Request next animation frame for smooth movement
    requestAnimationFrame(updateClock);
  }

  // Track the last second to add pulsing effect
  let lastSecond = -1;

  // Add pulse animation to CSS
  const style = document.createElement("style");
  style.innerHTML = `
        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
            100% { transform: translate(-50%, -50%) scale(1); }
        }
        .center-dot.pulse {
            animation: pulse 0.5s ease-out;
        }
        .separator {
            display: inline-block;
            width: 10px;
            text-align: center;
        }
    `;
  document.head.appendChild(style);

  // Initialize and start the clock
  updateClock();
});
