if (localStorage.getItem("logado") !== "true") {
  alert("Você precisa estar logado para acessar essa página!");
  window.location.href = "login.html";
}


function logout() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}
