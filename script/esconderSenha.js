function toggleSenha(id, senhaReal) {
  const senhaText = document.getElementById(`user_senha_${id}`);
  const eyeIcon = document.getElementById(`eye-icon-${id}`);

  if (senhaText.textContent === '********') {
    senhaText.textContent = senhaReal;
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    senhaText.textContent = '********';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}
