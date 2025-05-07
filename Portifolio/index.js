function enviarWhats(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5588981522318';

    const texto = `Olá, Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `http://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);
    window.open(url, '_blank');
}

