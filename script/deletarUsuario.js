async function deletarUsuario(){
    let id = document.querySelector('#deletar').value
    const URL = 'https://6856e44521f5d3463e53f236.mockapi.io/register/' + id;

    let response = await fetch(URL, {
        method: 'DELETE'
    })

    alert('Usuário deletado com sucesso');

    location.reload();
}



