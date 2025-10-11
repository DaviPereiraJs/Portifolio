// Função para enviar WhatsApp com validação
function enviarWhats(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');
    const nome = nomeInput.value.trim();
    const mensagem = mensagemInput.value.trim();
    const telefone = '5588981522318';

    // 1. Melhoria: Validação de Formulário
    if (nome === '' || mensagem === '') {
        alert('Por favor, preencha seu nome e a mensagem para entrar em contato.');
        // Adiciona um feedback visual se um campo estiver vazio
        if (nome === '') nomeInput.focus();
        else if (mensagem === '') mensagemInput.focus();
        return; // Impede o envio se a validação falhar
    }

    const texto = `Olá, Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    // Usa https para maior segurança e compatibilidade
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');

    // Opcional: Limpar o formulário após o envio
    // nomeInput.value = '';
    // mensagemInput.value = '';
}


// 2. Melhoria: Scroll Spy para Menu Ativo
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as seções, incluindo a main
    const sections = document.querySelectorAll('main, section'); 
    const navLinks = document.querySelectorAll('.menu-link');

    function updateNav() {
        let current = '';
        const scrollPosition = window.scrollY;

        // Itera sobre as seções para encontrar a que está no topo ou visível
        sections.forEach(section => {
            // Subtrai 150px para dar um "offset" devido ao menu fixo e ao topo da seção
            const sectionTop = section.offsetTop - 150; 
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop) {
                current = sectionId;
            }
        });

        // Remove a classe 'active' de todos os links e adiciona ao link da seção atual
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateNav);
    updateNav(); // Executa uma vez ao carregar a página para definir o estado inicial
});