const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector("#nav-links"); // Target the nav links
const body = document.body;

menuButton.addEventListener("click", () => {
    body.classList.toggle("menu-active");
    navLinks.classList.toggle("show"); // Toggle the visibility of the nav links
});






// Dropdown Toggle Functionality
document.addEventListener("DOMContentLoaded", function() {
   const dropdownToggle = document.querySelector(".dropdown-toggle");
   const dropdownContent = document.querySelector(".dropdown-content");

   // Toggle dropdown content on click
   dropdownToggle.addEventListener("click", function(event) {
       event.preventDefault(); // Prevents default link behavior
       dropdownContent.classList.toggle("show"); // Show/hide dropdown content
   });

   // Close dropdown if clicked outside
   document.addEventListener("click", function(event) {
       if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
           dropdownContent.classList.remove("show");
       }
   });
});





// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};

// Scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
