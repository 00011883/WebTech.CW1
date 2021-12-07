"use strict";

const news = document.getElementById("news");
const formBtn = document.getElementById("form__submit");

// Getting current date for post
function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  const yyyy = today.getFullYear();

  return dd + "." + mm + "." + yyyy;
}

// Shortening title and content
function reduceWordyContent(content) {
  if (content.length > 100) {
    return content.slice(0, 100) + "...";
  } else {
    return content;
  }
}

function reduceWordyTitle(content) {
  if (content.length > 46) {
    return content.slice(0, 43) + "...";
  } else {
    return content;
  }
}

formBtn.addEventListener("click", (e) => {
  // Prevent reloading page when btn is clicked.
  e.preventDefault();

  let div = document.createElement("div");
  div.setAttribute("class", "new");

  // Grab form data.
  const formTitle = document.getElementById("form__title");
  const formContent = document.getElementById("form__content");

  if (formTitle.value.trim() !== "" && formContent.value.trim() !== "") {
    div.innerHTML = `
    <img
    src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe41d25ac8f537c5/61132f93f57b2f35921c67d0/081621-Price-change-Banner.jpeg"
    alt="News Cover Img"
    class="news__img"
    id="news__img"
    />
    <div>
      <p class="news__date" id="news__date">${getDate()}</p>
      <h3 class="news__title" id="news__title">
        ${reduceWordyTitle(formTitle.value)}
      </h3>
      <p class="news__content" id="news__content">
        ${reduceWordyContent(formContent.value)}
      </p>
      <a href="#" class="news__link"
        >See article
        <svg viewBox="0 0 25 15">
          <path
            d="M16.2.5L19.9 4m4.6 3.5l-8.3 7"
            fill="none"
            stroke="#ff4655"
          ></path>
          <path
            fill="none"
            stroke="#ff4655"
            stroke-miterlimit="10"
            d="M16 7.5H0"
          ></path>
        </svg>
      </a>
    </div>
  `;

    news.appendChild(div);

    formTitle.value = "";
    formContent.value = "";
    // Validators
  } else if (formTitle.value.trim() === "" && formContent.value.trim() === "") {
    alert("Please enter title and content!");
  } else if (formTitle.value.trim() === "") {
    alert("Please enter title as well!");
  } else if (formContent.value.trim() === "") {
    alert("Please enter content as well!");
  }
});
