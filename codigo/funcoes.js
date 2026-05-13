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