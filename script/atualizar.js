async function atualizarCadastro() {
    let id = document.querySelector('#clienteIdAtualizar').value;

    const URL = 'https://api-cadastro-backtend.onrender.com/' + id;

    let nome = document.querySelector('#nomeAtualizar').value 
    let nascimento = document.querySelector('#nascimentoAtualizar').value 
    let email =document.querySelector('#emailAtualizar').value 
    let senha = document.querySelector('#senhaAtualizar').value 

    let atualizarCliente = {
        "name": nome,
		"dataNascimento": nascimento,
		"email": email,
		"senha": senha
    }

    let response = await fetch(URL, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(atualizarCliente)
    })

    alert('Usuário Atualizado com sucesso!')

    location.reload();

}

