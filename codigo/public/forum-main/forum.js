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
        const username = usuario ? usuario.username : 'Usuário desconhecido';

        const fotoOuAvatar = usuario?.photo_url
        ? `<img src="${usuario.photo_url}" alt="${username}"
                width="40" height="40"
                style="border-radius:50%; object-fit:cover; flex-shrink:0;"
                onerror="this.replaceWith(criarAvatar('${username}'))">`
        : criarAvatar(username).outerHTML;

        const card = document.createElement('div');
        card.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-2">
            ${fotoOuAvatar}
            <div>
            <p class="mb-0 fw-semibold">${username}</p>
            <small class="text-muted">${post.dataCriacao}</small>
            </div>
            <a href="../detalhes/detalhes.html?id=${post.id}" target="_blank"
            class="btn btn-dark rounded-pill btn-sm ms-auto">Ver Detalhes</a>
        </div>
        <h2 class="fs-5">${post.titulo}</h2>
        <p>${post.conteudo}</p>
        `;
        card.classList.add('card', 'p-3', 'mb-3');
        listaPostagens.appendChild(card);
    });
    });

function criarAvatar(username) {
    const div = document.createElement('div');
    div.textContent = username.slice(0, 2).toUpperCase();
    div.style.cssText = `
        width:40px; height:40px; border-radius:50%;
        background:#ffc107; color:#000;
        display:flex; align-items:center; justify-content:center;
        font-weight:600; font-size:13px; flex-shrink:0;
    `;
    return div;
}