document.addEventListener('DOMContentLoaded', async function() {
    const userData = localStorage.getItem('user');
    console.log(userData);
    const user = JSON.parse(userData);

    const conta = document.createElement('div');
    const pagina = document.getElementById('meu-perfil');

    conta.innerHTML = `
    <div class="card shadow-sm" style="width: 100%; max-width: 420px;">
        <div class="card-body p-4">

            <h5 class="card-title mb-1">Editar conta</h5>
            <p class="text-muted small mb-4">Atualize suas informações</p>

            <div class="mb-3">
                <img src="${user.photo_url}" width="40" height="40" class="me-2">
                <label for="text" class="form-label">FOTO URL</label>
                <input type="text" class="form-control" id="photo" value="${user.photo_url}">
            </div>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" value="${user.username}">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" value="${user.email}">
            </div>

            <div class="mb-4">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" value="${user.senha}">
            </div>

            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-outline-secondary"><a href = "../forum-main/forum.html" id = "cancelar">Cancelar</a></button>
                <button class="btn btn-warning" id="salvar">Salvar</button>
            </div>

        </div>
    </div>`;

    pagina.appendChild(conta);

    const btnSalvar = document.getElementById('salvar');
    btnSalvar.addEventListener('click', async function () {
        
        const id = user.id;
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const photoUrl = document.getElementById('photo').value;

        const patch = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id, email: email, senha: senha, username: name, photo_url: photoUrl })
        });

        const updatedUser = { id: id, email: email, senha: senha, username: name, photo_url: photoUrl };

        localStorage.setItem('user', JSON.stringify(updatedUser));

        alert("Alterações bem sucedidas!");

        window.location.href = "../forum-main/forum.html";
    })
});