const menu = document.querySelector(".menu-links");
const openIcon = document.querySelector("#openMenuBtn");
const closeIcon = document.querySelector("#closeMenuBtn");

openIcon.addEventListener("click", function () {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  menu.classList.add("open");
});

closeIcon.addEventListener("click", function () {
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  menu.classList.remove("open");
});
