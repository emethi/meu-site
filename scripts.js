// Função para alternar a visibilidade do menu suspenso
document.querySelector('.menu-btn').addEventListener('click', function (e) {
    e.stopPropagation(); // Impede que o clique no botão feche o menu imediatamente
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const menuBtn = document.querySelector('.menu-btn');
    if (!dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});