async function deletarUsuario(){
    let id = document.querySelector('#deletar').value
    const URL = API_BACK + 'usuario/' +id;

    let response = await fetch(URL, {
        method: 'DELETE'
    })

    alert('Usuário deletado com sucesso');

    location.reload();
}



