import { carregarPosts, salvarPost } from "../funcoes.js";



const btnEnviar = document.getElementById('btnEnviar');



btnEnviar.addEventListener('click', async function(){
    const usuarioLogado = JSON.parse(localStorage.getItem('user'));
    console.log(usuarioLogado);
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;
    const userId = usuarioLogado.id;
    const userNome = usuarioLogado.username;
    const data = new Date();
    const date = data.toISOString().split("T")[0];
    const postagens = await carregarPosts();

    console.log(`Username do userlogado: ${usuarioLogado.nome}`)

    await salvarPost(date, userId, userNome, conteudo, titulo);

    window.location.reload();
})


document.addEventListener('DOMContentLoaded', async function () {
    
    const postagens = await carregarPosts();

    const listaPostagens = document.getElementById('lista-postagens');

    postagens.forEach(i => {
        const card = document.createElement('div');
        card.innerHTML = `<h2>${i.titulo}</h2>  <span>${i.usuarioUser}  -  ${i.datacriacao}</span> <br> <p>${i.conteudo}</p>`;
        card.classList.add('card', 'p-3', 'mb-3');

        listaPostagens.appendChild(card);
    });

})