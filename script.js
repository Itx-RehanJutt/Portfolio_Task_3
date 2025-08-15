document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});