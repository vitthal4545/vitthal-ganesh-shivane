const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const navLinks = document.querySelector("#hamburger-navlinks");

menuBtn.addEventListener("click", () => {
  navLinks.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  navLinks.style.visibility = "hidden";
});
