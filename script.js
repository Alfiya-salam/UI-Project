
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you! We will proceed with your request.');
    });
});


