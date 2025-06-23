function formatarData(dataISO) {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

async function tabelaUsuarios() {
    const URL = API_BACK + 'usuario/';
    let response = await fetch(URL);
    let data = await response.json();

    for (let i = 0; i < data.length; i++) {
        let cadaCliente = data[i];

        let container = document.querySelector('#tabela-usuarios');

        let html = `
        <tr>
            <td><strong id='user_id_${cadaCliente._id}'>${cadaCliente._id}</strong></td>
            <td><strong id='user_name_${cadaCliente._id}'  >${cadaCliente.name.toUpperCase()}</strong></td>
            <td><strong id='user_nascimento_${cadaCliente._id}'>${formatarData(cadaCliente.dataNascimento)}</strong></td>
            <td><strong id='user_email_${cadaCliente._id}'>${cadaCliente.email}</strong></td>
            <td>
                <strong id="user_senha_${cadaCliente._id}">********</strong>
                    <i id="eye-icon-${cadaCliente._id}" class="fas fa-eye" style="cursor:pointer; margin-left: 8px;"
                    onclick="toggleSenha('${cadaCliente._id}', '${cadaCliente.senha}')">
                    </i>
            </td>
            <td>
                <div class="action-buttons">
                    <button id="btnEditar" class="btn btn-edit" onclick="abrirModal('${cadaCliente._id}', '${cadaCliente.senha}')">
                        <i class="fas fa-edit"></i> Editar
                    </button>

                    <button id="btnRemover" class="btn btn-delete" onclick="abrirModalConfirmacao('${cadaCliente._id}')">
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




