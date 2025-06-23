async function deletarUsuario(){
    let id = document.querySelector('#deletar').value
    const URL = 'https://api-cadastro-backtend.onrender.com/usuario/' + id;

    let response = await fetch(URL, {
        method: 'DELETE'
    })

    alert('Usuário deletado com sucesso');

    location.reload();
}



