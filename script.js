document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message.`);
    // Here you could add AJAX to send the form data to a server

    // Reset the form
    document.getElementById('contactForm').reset();
});
