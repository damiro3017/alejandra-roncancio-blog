const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".open-btn");
const navbar = document.querySelector(".header__navbar");

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});
