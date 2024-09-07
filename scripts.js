// Function to toggle the mobile menu
function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive"; // Add "responsive" class for mobile view
    } else {
        navbar.className = "navbar"; // Revert to default navbar
    }
}

// Smooth scrolling for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation for the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return false;
    } else {
        alert("Thank you for your message!");
        return true; // Form can be submitted
    }
}

