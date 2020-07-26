// Atribui a mudança de stylesheet ao clicar nos botões-gatilho com a função



function nights() {
    var sheet = document.querySelector("head > link:nth-child(6)");
    sheet.href = 'nights.css';
  }
  
  function verde() {
    var sheet = document.querySelector("head > link:nth-child(6)");
    sheet.href = 'verde.css';
  }
  
  function coral() {
    var sheet = document.querySelector("head > link:nth-child(6)");
    sheet.href = 'coral.css';
  }