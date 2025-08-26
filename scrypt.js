// JavaScript para funcionalidades básicas
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar ano atual no footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-text p').textContent = `GuedesSEC © ${year} - Todos os direitos reservados`;

    // Simular carregamento de conteúdo
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Recurso em desenvolvimento! Em breve você poderá acessar este conteúdo.');
        });
    });

    // Efeito de digitação no título
    const welcomeTitle = document.querySelector('.welcome-section h1');
    const originalText = welcomeTitle.textContent;
    welcomeTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            welcomeTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
