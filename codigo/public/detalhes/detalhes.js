import { carregarPost, carregarUsuario } from "../funcoes.js";

document.addEventListener('DOMContentLoaded', async function (){ 
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');


    const postInfo = await carregarPost(id);

    const userInfo = await carregarUsuario(postInfo.usuarioCod);

    const cardPost = document.getElementById('detalhes');


    cardPost.innerHTML = `<h1>Detalhes da postagem</h1> <br> <h2>${postInfo.titulo}</h2> <br> <span>${userInfo.username}  -  ${postInfo.dataCriacao} - ${userInfo.email}</span> <br> <br> <p><h3>Conteúdo:</h3> <br> ${postInfo.conteudo}</p>`;




})