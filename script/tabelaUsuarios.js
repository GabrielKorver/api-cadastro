async function tabelaUsuarios() {
    const URL = 'https://6856e44521f5d3463e53f236.mockapi.io/register';
    let response = await fetch(URL);
    let data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let cadaCliente = data[i];

        let container = document.querySelector('#tabela-usuarios');

        let html = `
        <tr>
            <td><strong id='user_id_${cadaCliente.id}'>${cadaCliente.id}</strong></td>
            <td><strong id='user_name_${cadaCliente.id}'  >${cadaCliente.name.toUpperCase()}</strong></td>
            <td><strong id='user_nascimento_${cadaCliente.id}'>${cadaCliente.dataNascimento}</strong></td>
            <td><strong id='user_email_${cadaCliente.id}'>${cadaCliente.email}</strong></td>
            <td>
                <strong id="user_senha_${cadaCliente.id}">********</strong>
                    <i id="eye-icon-${cadaCliente.id}" class="fas fa-eye" style="cursor:pointer; margin-left: 8px;"
                    onclick="toggleSenha('${cadaCliente.id}', '${cadaCliente.senha}')">
                    </i>
            </td>
            <td>
                <div class="action-buttons">
                    <button id="btnEditar" class="btn btn-edit" onclick="abrirModal(${cadaCliente.id}, '${cadaCliente.senha}')">
                        <i class="fas fa-edit"></i> Editar
                    </button>

                    <button id="btnRemover" class="btn btn-delete" onclick="deletarUsuario(${cadaCliente.id})">
                        <i class="fas fa-trash-alt"></i> Remover
                    </button>
                </div>
            </td>
        </tr>       
        `;

        container.innerHTML += html;
    }
}

tabelaUsuarios();;


    

