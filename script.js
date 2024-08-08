document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const backToTopButton = document.getElementById('back-to-top');

    // Alternar entre tema claro e escuro
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggleButton.textContent = isDarkMode ? 'Tema Claro' : 'Tema Escuro';
    });

    // Mostrar botão "Voltar ao topo" quando a página for rolada
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Voltar ao topo da página ao clicar no botão
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
