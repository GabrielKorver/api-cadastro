let idUsuarioParaRemover = null;

function abrirModalConfirmacao(id) {
    document.querySelector('#deletar').value = id;
  idUsuarioParaRemover = id;
  document.getElementById("modalConfirmacao").style.display = "flex";
}

document.getElementById("cancelarRemocao").onclick = function() {
  document.getElementById("modalConfirmacao").style.display = "none";
  idUsuarioParaRemover = null;
};

document.getElementById("confirmarRemocao").onclick = function() {
  if (idUsuarioParaRemover !== null) {
    deletarUsuario(idUsuarioParaRemover);
    document.getElementById("modalConfirmacao").style.display = "none";
    idUsuarioParaRemover = null;
  }
};


function modalCancelar() {
    document.querySelector('#modalConfirmacao').style.display = 'none'
}