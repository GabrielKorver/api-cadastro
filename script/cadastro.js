async function criarUsuario() {

  let name = document.querySelector('#nome').value;
  let dataNascimento = document.querySelector('#nascimento').value;
  let email = document.querySelector('#email').value;
  let senha = document.querySelector('#senha').value;

  const URL = API_BACK + 'usuario/';

  if (name === "" || name.length < 2) {
    alert("Digite um nome válido!");
  } else if (!dataNascimento || new Date(dataNascimento) > new Date()) {
    alert("Digite uma data válida!");
  } else if (email === "" || !email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido!");
  } else if (senha === "" || senha.length < 8) {
    alert("Digite uma senha válida!");
  } else {
    // 🟡 Verifica se o e-mail já existe no banco via GET e find()
    let responseGet = await fetch(URL);
    let usuarios = await responseGet.json();

    const emailExiste = usuarios.find(usuario => usuario.email === email);
    if (emailExiste) {
      alert('Este e-mail já está cadastrado!');
      return;
    }

    let newCliente = {
      "name": name,
      "dataNascimento": dataNascimento,
      "email": email,
      "senha": senha,
    }

    let response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCliente)
    })

    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'login.html';
  }

}
