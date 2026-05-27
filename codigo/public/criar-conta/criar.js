
document.addEventListener('DOMContentLoaded', async function() {

    const conta = document.createElement('div');
    const pagina = document.getElementById('meu-perfil');

    conta.innerHTML = `
    <div class="card shadow-sm" style="width: 100%; max-width: 420px;">
        <div class="card-body p-4">

            <h5 class="card-title mb-1">Criar conta</h5>
            <p class="text-muted small mb-4">Adicione suas informações</p>


            <div class="mb-3">
                <label for="text" class="form-label">FOTO URL</label>
                <input type="text" class="form-control" id="photo" placeholder="URL da foto...">
            </div>



            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" value="">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" value="">
            </div>

            <div class="mb-4">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha" value="">
            </div>

            

            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-outline-secondary"><a href = "../index.html" id = "cancelar">Cancelar</a></button>
                <button class="btn btn-warning" id="salvar">Criar</button>
            </div>

        </div>
    </div>`;

    pagina.appendChild(conta);

    const btnSalvar = document.getElementById('salvar');
    btnSalvar.addEventListener('click', async function () {
        
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const photoUrl = document.getElementById('photo').value;

        const patch = await fetch(`http://localhost:3000/usuarios`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, senha: senha, username: name, photo_url: photoUrl })
        });

        alert('Criação de conta bem-sucedida!')
        window.location.href = "../index.html";
    })
});