import { carregarUsuarios } from "./funcoes.js";



document.getElementById('form-login').addEventListener('submit', async function(event) { // ao clicar em entrar, aciona funcao de verificar login
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const users = await carregarUsuarios();


    let encontrado = false;
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].email === email && users[i].senha === senha) {
            localStorage.setItem('user', JSON.stringify(users[i]));
            encontrado = true;
            alert('Login bem sucedido');
            window.location.href = '/forum-main/forum.html';
            break;
        }
        
    }

    if (!encontrado) {
        alert('Credenciais inválidas');
    }

    
});



