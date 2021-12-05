"use strict";

const weaponsContainer = document.getElementById("weapons__container");
const weaponTitle = document.getElementById("weapon__title");
const weaponView = document.getElementById("weapon__view");
const weaponDescription = document.getElementById("weapon__description");

const weaponsHeading = document.getElementById("weapons__heading");

window.addEventListener("load", () => init());

function init() {
  try {
    fetch("guns.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((weapon) => {
          insertWeapon(weapon);
        });
      });
  } catch (e) {
    insertErrorMessage();
    throw e;
  }
}

function insertWeapon(weapon) {
  let div = document.createElement("div");
  div.setAttribute("class", "weapon");

  div.innerHTML = `
  <h3 class="weapon__title" id="weapon__title">${weapon.title}.</h3>
  <img
    src="./assets/guns/${weapon.imgPath}"
    alt="Gun for Game"
    class="weapon__view"
    id="weapon__view"
  />
  <p class="weapon__description" id="weapon__description">
  ${weapon.description}
  </p>
`;

  weaponsContainer.appendChild(div);
}

function insertErrorMessage() {
  weaponsHeading.style.maxWidth = "none";
  let eMessage = createElement("h2");
  eMessage.setAttribute("class", "weapon__error");
  eMessage.textContent = "Something went wrong, Please come back again later";
  weaponsContainer.appendChild(eMessage);
}
