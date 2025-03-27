const closeMenu = document.querySelector(".close-btn");
const openMenu = document.querySelector(".open-btn");
const navbar = document.querySelector(".header__navbar");
const navLinks = document.querySelectorAll(".header__navbar__link");

openMenu.addEventListener("click", () => {
  navbar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
