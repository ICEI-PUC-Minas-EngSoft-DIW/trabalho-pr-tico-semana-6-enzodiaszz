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

export async function carregarPost(id){

    const response = await fetch(`${API}/publicacoes/${id}`);
    const post = await response.json();

    return post
}

export async function carregarUsuario(id) {
    const response = await fetch(`${API}/usuarios/${id}`);
    const user = await response.json();

    return user
}

export async function salvarPost(data, usuariocod, conteudo, titulo) {
    const post = await fetch(`${API}/publicacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "dataCriacao": data,
            "usuarioCod": usuariocod,
            "conteudo": conteudo,
            "titulo": titulo
        })
    });
}