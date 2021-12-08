// Mobile burger menu

const mobileNav = document.getElementById("mobile__nav");
const burgerMenu = document.getElementById("burger__activator");

const body = document.querySelector("body");

let bgImgOnBurgerActive = true;
burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("active_nav");
  burgerMenu.classList.toggle("burger_active");

  if (bgImgOnBurgerActive) {
    body.style.backgroundImage = "initial";
    bgImgOnBurgerActive = false;
  } else {
    body.style.backgroundImage = "url('../../assets/main/characters_bg.webp')";
    bgImgOnBurgerActive = true;
  }
});
