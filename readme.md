# 📋 Tabela de Usuários - CRUD com MockAPI

Este projeto é uma aplicação simples de front-end que consome uma API mockada para listar usuários em uma tabela HTML. Também inclui ações como **editar**, **remover** e **mostrar/ocultar senha** de forma interativa.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [MockAPI](https://mockapi.io/) (para simulação dos dados)
- Font Awesome (para ícones)

## 📦 Funcionalidades

✅ Listar todos os usuários cadastrados  
✅ Exibir informações como ID, Nome, Data de Nascimento, Email e Senha  
✅ Botões para editar e remover cada usuário  
✅ Ícone de "olho" para exibir ou ocultar a senha do usuário  

## 🧠 Lógica principal

A função `tabelaUsuarios()` é responsável por:

1. Fazer uma requisição `GET` para a API:
   ```js
   const URL = API_BACK + 'usuario/'
