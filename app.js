"use strict";

// Carousel set up
const carousel = document.querySelector(".carousel");
const carouselImgs = document.querySelectorAll(".carousel picture");

// Setting Credetials
const cred = document.getElementById("credentials");

let idx = 0;

setInterval(() => {
  carouselImgs.forEach((img) => {
    setTimeout(() => {
      carouselImgs[idx].classList.add("hide");

      img.style.display = "none";
    }, 500);
  });

  if (idx == carouselImgs.length - 1) {
    idx = 0;
  } else {
    idx++;
  }

  setTimeout(() => {
    carouselImgs[idx].classList.add("show");
    carouselImgs[idx].style.display = "inline-block";
  }, 500);
}, 4000);

// Adding Audio on background
window.addEventListener("load", () => {
  setTimeout(() => {
    let video = document.createElement("video");
    video.setAttribute("id", "music");
    video.setAttribute("loop", "true");
    video.setAttribute("preload", "auto");
    video.setAttribute("hidden", "");
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");

    video.innerHTML = `
      <source src="../../assets/music/dieForYou.mp3" type="audio/mp3" />

      <p>
        Your browser doesn't support HTML5 audio. Here is a
        <a href="./assets/music/dieForYou.mp3">link to the audio</a> instead.
      </p>
    `;

    video.volume = 0.3;
    body.appendChild(video);
  }, 3000);

  setTimeout(() => {
    const music = document.getElementById("music");
    music.play();
  }, 5000);

  setTimeout(() => {
    cred.style.animation = "appear 0.7s cubic-bezier(0.18,0.89,0.6,1.3)";
  }, 1000);

  setTimeout(() => {
    cred.style.top = "50%";
  }, 1500);

  setTimeout(() => {
    cred.style.animation = "hideCred 0.5s linear";
  }, 10000);

  setTimeout(() => {
    cred.style.display = "none";
  }, 10500);
});

// Turn on and off music
let click = true;
carousel.addEventListener("click", () => {
  if (click) {
    document.getElementById("music").volume = 0;
    carousel.style.cursor =
      "url('./assets/music/volume_on.png'), url('../../assets/music/volume_on.png'), default";
    click = false;
  } else {
    document.getElementById("music").volume = 0.3;
    carousel.style.cursor =
      "url('./assets/music/volume_off.png'), url('../../assets/music/volume_off.png'), default";
    click = true;
  }
});
