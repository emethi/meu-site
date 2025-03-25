// Função para transição suave ao carregar página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // FAQ interativo (das páginas anteriores)
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Envio do formulário com transição suave
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Impede o envio imediato
            document.body.style.opacity = '0'; // Inicia a transição
            setTimeout(() => {
                this.submit(); // Envia o formulário após a transição
            }, 500);
        });
    }
});

// Função para alternar o menu suspenso
document.querySelector('.menu-btn').addEventListener('click', function (e) {
    e.stopPropagation();
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('.menu-btn');
    if (!dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Transição suave ao clicar nos links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});