// Function to show an alert when the button is clicked
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Thank you for your interest in G-Aware! Together, we can make a difference in combating deforestation.');
});

// Form submission event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this as needed)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you can add code to actually send the form data to a server if needed
        // For now, we will just reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});