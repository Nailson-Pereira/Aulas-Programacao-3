
let meuBotao = document.querySelector('button');
let listaNomes = document.querySelector('ul');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  localStorage.setItem('nome', meuNome);
  var lista  = listaNomes.innerHTML;
  lista = lista +"<li>"+meuNome+"</li>";
  listaNomes.innerHTML = lista;
}