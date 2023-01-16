// Select the navigation menu and the menu button
let nav = document.querySelector("nav");
let menuButton = document.querySelector(".menu-button");

// Add a click event listener to the menu button
menuButton.addEventListener("click", function() {
  // Toggle the "responsive" class on the navigation menu
  nav.classList.toggle("responsive");
});

// Add a click event listener to the menu links
let menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Remove the "responsive" class when a link is clicked
    nav.classList.remove("responsive");
  });
});

