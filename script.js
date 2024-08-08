document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButtons = document.querySelectorAll('.theme-toggle button');
    const backToTopButton = document.getElementById('back-to-top');

    // Alternar entre tema claro e escuro
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'dark-theme') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });
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
