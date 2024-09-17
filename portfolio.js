document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('#contact a');

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt('Please enter your email address:');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            window.location.href = `mailto:${email}`;
        } else {
            alert('Please enter a valid email address.');
        }
    });
});