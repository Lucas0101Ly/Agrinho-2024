document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscricao-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        
        alert(`Inscrição recebida!\nNome: ${nome}\nEmail: ${email}`);
        
        form.reset();
    });
});
