const images = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    caption: "Beautiful mountain landscape with clouds",
  },
  {
    url: "https://images.unsplash.com/photo-1616036740257-9449ea1f6605",
    caption: "Stunning sunset over the ocean horizon",
  },
  {
    url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8",
    caption: "Vibrant autumn forest with colorful foliage",
  },
  {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    caption: "Ancient architectural marvel standing against time",
  },
  {
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    caption: "Serene field of wildflowers in full bloom",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.getElementById("indicators");
const autoplayBtn = document.getElementById("autoplayBtn");
const timerDisplay = document.getElementById("timer");

let currentIndex = 0;
let autoplayInterval = null;
let timeRemaining = 5;
const autoplayDuration = 5;

function initCarousel() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = `Slide ${index + 1}`;

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = image.caption;

    slide.appendChild(img);
    slide.appendChild(caption);
    carouselTrack.appendChild(slide);

    const dot = document.createElement("div");
    dot.classList.add("indicator");
    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoplay();
    });

    indicators.appendChild(dot);
  });

  updateCarousel();
}

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update indicators
  const dots = document.querySelectorAll(".indicator");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Go to a specific slide
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function startAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }

  timeRemaining = autoplayDuration;
  updateTimerDisplay();

  autoplayInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      nextSlide();
      timeRemaining = autoplayDuration;
    }
  }, 1000);

  autoplayBtn.textContent = "Stop Slideshow";
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }

  autoplayBtn.textContent = "Start Slideshow";
  timerDisplay.textContent = `${autoplayDuration}s`;
}

function resetAutoplay() {
  if (autoplayInterval) {
    stopAutoplay();
    startAutoplay();
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = `${timeRemaining}s`;
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

autoplayBtn.addEventListener("click", () => {
  if (autoplayInterval) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
    resetAutoplay();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
    resetAutoplay();
  }
});

initCarousel();
