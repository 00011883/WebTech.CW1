"use strict";

// Replacement will be going in this container
const galleryItem = document.getElementById("gallery__item");
const galleryContainer = document.getElementById("gallery__container");

// Container for each item
const agentContainer = document.getElementById("agents");
const wallContainer = document.getElementById("wallpapers");
const skinContainer = document.getElementById("skins");
const mapContainer = document.getElementById("maps");

// Taking filter items
const allFilter = document.getElementById("all");
const charactersFilter = document.getElementById("characters-filter");
const wallpapersFilter = document.getElementById("wallpapers-filter");
const skinsFilter = document.getElementById("skins-filter");
const mapsFilter = document.getElementById("maps-filter");

const filters = document.querySelectorAll(".gallery__filter p");

window.addEventListener("load", () => {
  insertAll();
});

function insertAll() {
  clearItem();
  insertCharacters();
  insertWallpapers();
  insertSkins();
  insertMaps();
}

function insertCharacters() {
  try {
    fetch("gallery.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        agentContainer.innerHTML = "";

        const agents = Object.entries(data[0]);
        agents.shift();

        agents.forEach((agent) => {
          let img = document.createElement("img");
          let picture = document.createElement("picture");
          picture.classList.add("gallery__img");
          picture.classList.add("gallery__agent");
          picture.setAttribute("data-before", agent[0]);
          img.classList.add("gallery__img--agent");
          img.src = agent[1];
          img.alt = agent[0];
          img.title = agent[0];
          picture.appendChild(img);
          agentContainer.appendChild(picture);
        });

        galleryContainer.appendChild(agentContainer);
      });
  } catch (error) {
    console.log(error.Message);
    throw error;
  }
}

function insertWallpapers() {
  try {
    fetch("gallery.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        wallContainer.innerHTML = "";

        const walls = Object.values(data[1]);
        walls.shift();

        walls.forEach((wall) => {
          let img = document.createElement("img");
          img.classList.add("gallery__img");
          img.classList.add("gallery__img--wallpaper");

          img.src = wall;
          img.alt = "Agent Wallpaper From Valorant";

          wallContainer.appendChild(img);
        });
        galleryContainer.appendChild(wallContainer);
      });
  } catch (error) {
    console.log(error.Message);
    throw error;
  }
}

function insertSkins() {
  try {
    fetch("gallery.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // agents.forEach((agent) => {
        //   let img = document.createElement("img");
        //   let picture = document.createElement("picture");
        //   picture.classList.add("gallery__img");
        //   picture.classList.add("gallery__agent");
        //   picture.setAttribute("data-before", agent[0]);
        //   img.classList.add("gallery__img--agent");
        //   img.src = agent[1];
        //   img.alt = agent[0];
        //   img.title = agent[0];
        //   picture.appendChild(img);
        //   agentContainer.appendChild(picture);
        // });

        // galleryContainer.appendChild(agentContainer);

        skinContainer.innerHTML = "";

        const skins = Object.entries(data[2]);
        skins.shift();

        skins.forEach((skin) => {
          let img = document.createElement("img");
          let picture = document.createElement("picture");
          picture.classList.add("gallery__img");
          picture.classList.add("gallery__skin");
          picture.setAttribute("data-before", skin[0]);
          img.classList.add("gallery__img--skin");

          img.src = skin[1];
          img.alt = skin[0];
          img.title = skin[0];
          picture.appendChild(img);
          skinContainer.appendChild(picture);
        });
        galleryContainer.appendChild(skinContainer);
      });
  } catch (error) {
    console.log(error.Message);
    throw error;
  }
}

function insertMaps() {
  try {
    fetch("gallery.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        mapContainer.innerHTML = "";

        const maps = Object.values(data[3]);
        maps.shift();

        maps.forEach((map) => {
          let img = document.createElement("img");
          img.classList.add("gallery__img");
          img.classList.add("gallery__img--map");

          img.src = map;
          img.alt = "Map From Valorant";

          mapContainer.appendChild(img);
        });
        galleryContainer.appendChild(mapContainer);
      });
  } catch (error) {
    console.log(error.Message);
    throw error;
  }
}

// Clear before filtering
function clearItem() {
  galleryContainer.innerHTML = "";
}

allFilter.addEventListener("click", () => {
  clearItem();
  setActive();
  insertAll();
});

charactersFilter.addEventListener("click", () => {
  clearItem();
  setActive();
  insertCharacters();
});

wallpapersFilter.addEventListener("click", () => {
  clearItem();
  setActive();
  insertWallpapers();
});

skinsFilter.addEventListener("click", () => {
  clearItem();
  setActive();
  insertSkins();
});

mapsFilter.addEventListener("click", () => {
  clearItem();
  setActive();
  insertMaps();
});

// Set active class to current filtered item
function setActive() {
  filters.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive(filters);
      item.classList.add("active");
    });
  });
}

function removeActive(filters) {
  for (let i = 0; i < filters.length; i++) {
    filters[i].classList.remove("active");
  }
}
