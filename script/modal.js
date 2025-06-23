function abrirModal(id, senhaCompleta) {

  document.querySelector('#modalAtualizar').style.display = 'flex';

  document.querySelector('#clienteIdAtualizar').value = id;

  let name = document.querySelector(`#user_name_${id}`).innerText;
  let dataNascimentoTexto = document.querySelector(`#user_nascimento_${id}`).innerText;
  let partes = dataNascimentoTexto.split('/');
  let dataNascimentoFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`; // AAAA-MM-DD

  let email = document.querySelector(`#user_email_${id}`).innerText;
  let senha = document.querySelector(`#user_senha_${id}`).innerText;

  document.querySelector('#nomeAtualizar').value = name;
  document.querySelector('#nascimentoAtualizar').value = dataNascimentoFormatada;
  document.querySelector('#emailAtualizar').value = email;
  document.querySelector('#senhaAtualizar').value = senha;

  mostrarSenha(senhaCompleta)

}

function mostrarSenha(senha) {
  const senhaText = document.getElementById(`senhaAtualizar`);

  if (senhaText.value === '********') {
    senhaText.value = senha;
  }
}



function fecharModal() {
  document.querySelector('#modalAtualizar').style.display = 'none'
}