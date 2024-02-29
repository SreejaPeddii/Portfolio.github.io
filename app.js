document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simple form validation
        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        alert(`Thank you, ${nameInput.value}! Your message has been sent.`);
        form.reset();
    });
});
