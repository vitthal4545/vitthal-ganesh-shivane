const hamburger = document.querySelector(".hamburger-page");
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu() {
  // Check if the hamburger menu is currently displayed
  if (hamburger.style.display === "none" || hamburger.style.display === "") {
    // If the menu is hidden, display it and animate it to slide in from the right
    hamburger.style.display = "block";
    setTimeout(() => {
      hamburger.style.right = "0"; // Slide the menu in
    }, 10); // Delay to allow the display change to take effect
  } else {
    // If the menu is visible, hide it and animate it to slide out to the right
    hamburger.style.right = "-100%"; // Slide the menu out
    setTimeout(() => {
      hamburger.style.display = "none";
    }, 400); // Hide the menu after the transition ends (0.4s)
  }
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
