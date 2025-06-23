async function createUser() {
    let name = window.document.querySelector('#nome').value;
    let dataNascimento = window.document.querySelector('#nascimento').value;
    let email = window.document.querySelector('#email').value;
    let senha = window.document.querySelector('#senha').value;

    const URL = "https://api-cadastro-backtend.onrender.com/usuario/";

    let newCliente = {
		"name": name,
		"dataNascimento": dataNascimento,
		"email": email,
		"senha": senha,
    }

    let response = await fetch( URL, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newCliente)
    })

    alert('Usuário cadastrado com sucesso!')

    location.reload();

}











