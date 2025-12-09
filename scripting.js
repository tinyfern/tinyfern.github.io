// contact-validation.js

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission

    // Grab the form fields
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];

    // Basic validation
    if (!firstName) errors.push("Please enter your first name.");
    if (!lastName) errors.push("Please enter your last name.");
    
    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.push("Please enter your email.");
    } else if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (!message) errors.push("Please enter a message.");

    // Display feedback
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Thank you! Your message has been sent.");
      form.reset(); // Clear the form
    }
  });
});
