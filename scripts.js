// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alerts for buttons (you can replace this functionality with real forms or actions)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`You clicked: ${action}`);
    });
});

