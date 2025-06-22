function abrirModal(id) {

    document.querySelector('#modalAtualizar').style.display = 'flex';

    document.querySelector('#clienteIdAtualizar').value = id;

    let name = document.querySelector(`#user_name_${id}`).innerText;
    let dataNascimento = document.querySelector(`#user_nascimento_${id}`).innerText;
    let email = document.querySelector(`#user_email_${id}`).innerText;
    let senha = document.querySelector(`#user_senha_${id}`).innerText;

    document.querySelector('#nomeAtualizar').value = name;
    document.querySelector('#nascimentoAtualizar').value = dataNascimento;
    document.querySelector('#emailAtualizar').value = email;
    document.querySelector('#senhaAtualizar').value = senha;

mostrarSenha()

}

function mostrarSenha(id, senhaReal) {
  const senhaText = document.getElementById(`user_senha_${id}`);
  const eyeIcon = document.getElementById(`eye-icon-${id}`);

  if (senhaText.textContent === '********') {
    senhaText.textContent = senhaReal;
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } 
}



function fecharModal() {
    document.querySelector('#modalAtualizar').style.display = 'none'
}