document.addEventListener('DOMContentLoaded', () => {
    // 1. Glatko skrolanje (već standard)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Simulacija Parallax Efekta na Hero Naslovu
    const heroTitle = document.querySelector('.hero-content h1');
    const backgroundTexture = document.querySelector('.background-texture');

    if (heroTitle && backgroundTexture) {
        window.addEventListener('scroll', () => {
            let offset = window.pageYOffset;
            
            // Naslov se pomiče brže (manji Parallax)
            heroTitle.style.transform = 'translateY(' + offset * 0.4 + 'px)';

            // Pozadina se pomiče sporije (veći Parallax/fiksni)
            backgroundTexture.style.transform = 'translateY(' + offset * 0.1 + 'px)'; 
        });
    }

    // 3. Implementacija Kontakt Forme (kao u prethodnim odgovorima)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            // Ovdje ide klijentska validacija i obavijest korisniku.
            alert('Upit poslan! Agent Ante Para će vam se javiti uskoro.');
            contactForm.reset(); 
        });
    }
});
