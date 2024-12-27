"use strict";

function toggleMenu() {
  const menu = document.querySelector(".navList");
  console.log(menu); // Check if menu is found
  if (menu) {
    menu.classList.toggle("active");
  } else {
    console.error("Nav list not found!");
  }
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".navList");
  const sandwich = document.querySelector(".sandwichBar");
  if (!menu.contains(event.target) && !sandwich.contains(event.target)) {
    menu.classList.remove("active");
    sandwich.classList.remove("active");
  }
});
