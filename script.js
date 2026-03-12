/* ================= NAVBAR ================= */

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("change");
    navbar.classList.toggle("change");
  });
}

/* ================= VIDEO PLAYER ================= */

const video = document.querySelector(".video");
const playPauseBtn = document.querySelector("#play-pause");
const playPauseIcon = playPauseBtn ? playPauseBtn.querySelector("i") : null;
const bar = document.querySelector(".video-bar");

function updateVideoUI(isPlaying) {
  if (!video || !playPauseIcon) return;

  playPauseIcon.className = isPlaying
    ? "far fa-pause-circle"
    : "far fa-play-circle";

  video.style.opacity = isPlaying ? "0.7" : "0.3";
}

async function toggleVideo() {
  if (!video) return;

  if (video.paused) {
    try {
      await video.play();
      updateVideoUI(true);
    } catch {
      updateVideoUI(false);
    }
  } else {
    video.pause();
    updateVideoUI(false);
  }
}

/* Play button click */

if (playPauseBtn) {
  playPauseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleVideo();
  });
}

/* Video click */

if (video) {
  video.addEventListener("click", toggleVideo);
}

/* Video progress bar */

if (video) {
  video.addEventListener("timeupdate", () => {
    if (!bar || !video.duration) return;

    const progress = video.currentTime / video.duration;
    bar.style.width = `${progress * 100}%`;

    if (video.ended) updateVideoUI(false);
  });
}

/* ================= PRICING SLIDER ================= */

if (window.Swiper && document.querySelector(".swiper-container")) {

  new Swiper(".swiper-container", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,

    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },

    /* Responsive slider */

    breakpoints: {

      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      }

    }

  });

}

/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message sent successfully!");

    /* Scroll to home */

    window.location.hash = "#home";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}