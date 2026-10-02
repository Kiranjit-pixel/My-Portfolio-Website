// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================================
// CLOSE MENU AFTER CLICKING A LINK
// =========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    contactForm.reset();

});


// =========================================
// CURRENT YEAR
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================================
// PROJECT BUTTONS
// =========================================

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Please connect this button to your GitHub project URL."
            );

        }

    });

});