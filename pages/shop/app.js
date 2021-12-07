"use strict";

const shopContainer = document.getElementById("shop__container");

window.addEventListener("load", () => {
  init();
});

function init() {
  try {
    fetch("products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((product) => {
          insertProduct(product);
        });
      });
  } catch (error) {
    insertErrorMessage();
    console.log(error.Message);
    throw error;
  }
}

function insertProduct(product) {
  let div = document.createElement("div");
  div.setAttribute("class", "shop__item");

  div.innerHTML = `
    <img src="${insertProductImage(
      product
    )}" alt="Product" class="shop__product" title="${product.title}" />
    <div class="shop__description" title="Click the Heart to Like this Product">
      <svg class="shop__like">
        <use xlink:href="./assets/heart.svg#heart"></use>
      </svg>
      <p class="shop__count">${randomNumber()}</p>
    </div>
  `;

  shopContainer.appendChild(div);
}

function insertProductImage(product) {
  return product.pathToWebp || product.pathToJpg;
}

function randomNumber() {
  return Math.floor(Math.random() * 450);
}

function insertErrorMessage() {
  alert("Something went wrong, come back later!");
}

// setTimeout function is needed to assign elements after they are created,
// without this, console.log(shopLike); will return NodeList with length of 0 elements
// In short, it is necessary for the likes function to work

setTimeout(function () {
  const shopLike = document.querySelectorAll(".shop__like");

  shopLike.forEach((like) => {
    let liked = false;
    like.addEventListener("click", () => {
      if (!liked) {
        like.classList.toggle("active");
        like.nextElementSibling.textContent =
          parseInt(like.nextElementSibling.textContent) + 1;
        liked = !liked;
      } else {
        like.classList.toggle("active");
        like.nextElementSibling.textContent =
          parseInt(like.nextElementSibling.textContent) - 1;
        liked = !liked;
      }
    });
  });
}, 1000);
