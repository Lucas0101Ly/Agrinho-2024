document.addEventListener('DOMContentLoaded', () => {
    const lightThemeButton = document.getElementById('light-theme-button');
    const darkThemeButton = document.getElementById('dark-theme-button');
    const backToTopButton = document.getElementById('back-to-top');

    // Aplicar tema claro
    lightThemeButton.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
    });

    // Aplicar tema escuro
    darkThemeButton.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
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
