// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
  });
}

// End of Navbar

// Section 2 Video
const video = document.querySelector(".video");
const playPauseBtn = document.querySelector("#play-pause");
const playPauseIcon = playPauseBtn ? playPauseBtn.querySelector("i") : null;
const bar = document.querySelector(".video-bar");

const setPlayingUI = (isPlaying) => {
  if (!playPauseIcon) return;
  playPauseIcon.className = isPlaying
    ? "far fa-pause-circle"
    : "far fa-play-circle";
  video.style.opacity = isPlaying ? ".7" : ".3";
};

const playPause = async () => {
  if (!video || !playPauseBtn) return;

  if (video.paused) {
    try {
      await video.play();
      setPlayingUI(true);
    } catch (e) {
      // If the browser blocks playback, keep UI in "paused"
      setPlayingUI(false);
    }
  } else {
    video.pause();
    setPlayingUI(false);
  }
};

if (playPauseBtn) {
  playPauseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    playPause();
  });
}

if (video) {
  video.addEventListener("click", () => {
    playPause();
  });
}


if (video) {
  video.addEventListener("timeupdate", () => {
    if (!bar || !video.duration) return;
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;
    if (video.ended) setPlayingUI(false);
  });
}
// End of Section 2 Video


// Section 3 Swiper
if (window.Swiper && document.querySelector(".swiper-container")) {
  new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
}

// Contact form: go to section 1 and restart animations
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Jump to first section
    window.location.hash = "#home";
    window.scrollTo(0, 0);

    // Simulate "refresh" by restarting navbar animation
    const navbarEl = document.querySelector(".navbar");
    if (navbarEl) {
      navbarEl.style.animation = "none";
      void navbarEl.offsetWidth; // force reflow
      navbarEl.style.animation = "";
    }
  });
}

