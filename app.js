"use strict";

// Carousel set up
const carousel = document.querySelector(".carousel");
const carouselImgs = document.querySelectorAll(".carousel picture");

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
    console.log(carouselImgs[idx]);
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
    video.setAttribute("autoplay", "true");
    video.setAttribute("preload", "auto");
    video.setAttribute("hidden", "");
    video.setAttribute("muted", "");

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
