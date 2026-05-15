const API = 'http://localhost:3000'

export async function carregarPosts(){

    const response = await fetch(`${API}/publicacoes`);
    const posts = await response.json();

    return posts
}

export async function carregarUsuarios() {
    const response = await fetch(`${API}/usuarios`);
    const users = await response.json();

    return users
}

export async function salvarPost(data, usuariocod, usuariouser, conteudo, titulo) {
    const post = await fetch(`${API}/publicacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "datacriacao": data,
            "usuarioCod": usuariocod,
            "usuarioUser": usuariouser,
            "conteudo": conteudo,
            "titulo": titulo
        })
    });
}