import { carregarPosts, salvarPost } from "../funcoes.js";



const btnEnviar = document.getElementById('btnEnviar');



btnEnviar.addEventListener('click', async function(){
    const usuarioLogado = JSON.parse(localStorage.getItem('user'));
    console.log(usuarioLogado);
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const userId = usuarioLogado.id;
    const data = new Date();
    const date = data.toISOString().split("T")[0];
    const postagens = await carregarPosts();

    console.log(`Username do userlogado: ${usuarioLogado.nome}`)

    await salvarPost(date, userId, conteudo, titulo);

    window.location.reload();
})


document.addEventListener('DOMContentLoaded', async function () {

    const [publicacoes, usuarios] = await Promise.all([
        fetch('http://localhost:3000/publicacoes').then(r => r.json()),
        fetch('http://localhost:3000/usuarios').then(r => r.json())
    ]);

    const listaPostagens = document.getElementById('lista-postagens');

    publicacoes.forEach(post => {
        const usuario = usuarios.find(u => u.id === post.usuarioCod);

        const card = document.createElement('div');
        card.innerHTML = `
        <h2>${post.titulo}</h2>
        <span>
            ${usuario ? usuario.username : 'Usuário desconhecido'}
            <button class="btn btn-dark rounded-pill">
            <a href="../detalhes/detalhes.html?id=${post.id}" target="_blank">Ver Detalhes</a>
            </button>
        </span>
        <br>
        <p>${post.conteudo}</p>
        `;
        card.classList.add('card', 'p-3', 'mb-3');
        listaPostagens.appendChild(card);
    });

});