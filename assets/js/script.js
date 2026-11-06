const header = document.querySelector("#site-header");
const heroButton = document.querySelector(".hero button");
const modalContainer = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-close");
const contactForm = document.querySelector("form");
const formMessage = document.querySelector(".formMessage");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

heroButton.addEventListener("click", () => {
  modalContainer.hidden = false;
});

modalClose.addEventListener("click", () => {
  modalContainer.hidden = true;
});


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formMessage.hidden = false;

  contactForm.reset();
});


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});