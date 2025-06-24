async function entrar() {
  let email = document.querySelector('#email').value;
  let senha = document.querySelector('#senha').value;

  const URL = API_BACK + 'usuario/';

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido!");
  } else if (senha === "" || senha.length < 8) {
    alert("Digite uma senha válida!");
  } else {
    try {
      let response = await fetch(URL);
      let usuarios = await response.json();

      const usuario = usuarios.find(user => user.email === email && user.senha === senha);

      if (!usuario) {
        alert("E-mail ou senha incorretos!");
        return;
      }

      localStorage.setItem("logado", "true");

      alert("Login realizado com sucesso!");
      window.location.href = "sistema.html";
    } catch (error) {
      alert("Erro ao tentar logar: " + error.message);
    }
  }
}
