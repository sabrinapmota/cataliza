const botao = document.querySelector('button');

traduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sabemos';
    } else if (data.status == 'Alive') {
        return 'Sim';
    } else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = (id) => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        const imagem = document.querySelector('#img' + id);
        const nomeDoPersonagem = document.querySelector('#nome' + id);
        const especie = document.querySelector('#especie' + id);
        const condicao = document.querySelector('#status' + id);
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}

botao.onclick = () => {
    for(i=1;i<4;i++) {
    pegarPersonagem(i);
    }
}