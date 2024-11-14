// Toggle Navbar when hamburger menu is clicked
function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
}

// Close Navbar if user clicks outside
document.addEventListener("click", function (event) {
  const navbar = document.getElementById("navbar");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Check if the click is outside of the navbar and hamburger menu
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbar.classList.remove("open");
  }
});
