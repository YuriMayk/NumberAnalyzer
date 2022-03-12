let addButton = document.querySelector("input#add-button");
let generatorButton = document.querySelector("input#generator-button");
let receivedNumber = document.querySelector("input#received-number");
let select = document.querySelector("select#select-select");
let result = document.querySelector("div#div-result");
let text = document.createElement("option");
const table = [];

function adicionarAtivo() {
  result.innerHTML = "";
  let numberValue = Number(receivedNumber.value);
  let index = table.findIndex((user) => user === numberValue);
  const adicionar = (num) => {
    table.push(num);
    select.innerHTML += `<option> Valor ${num} adicionado. </option>`;
  };
  const validar = () => {
    if (index !== -1) {
      return alert(`Valor inválido, ${numberValue} já foi adicionado.`);
    } else if (numberValue > 100 || numberValue < 1) {
      return alert(
        `Você digitou "${numberValue}" Valor inválido, selecione um número ENTRE 1 e 100!`
      );
    } else {
      adicionar(numberValue);
    }
  };
  validar();
  receivedNumber.value = "";
  receivedNumber.focus();
}

function cliqueiAtivo() {
  result.innerHTML = "";
  let quantityNumbers = table.length;
  let sumAll = 0;

  if (select.length === 1) {
    alert(`Você precisa adicionar um número, antes de clicar em finalizar.`);
  } else {
    table.sort();
    for (i = 0; i < quantityNumbers; i++) {
      sumAll += table[i];
    }
    result.innerHTML += `
    <p> Foram cadastrados ${quantityNumbers} números!</p></br>
    <p> O maior valor cadastrado foi ${table[quantityNumbers - 1]}! </p></br>
     <p> O menor valor cadastrado foi ${table[0]}!</p></br>
      <p> O somatório de todos os valores é ${sumAll}! </p></br>
       <p> A média dos valores é ${(sumAll / quantityNumbers).toFixed(
         2
       )}! </p></br>`;
  }
}

const keypress = (e) => {
  if (e.key === "Enter") {
    adicionarAtivo();
  }
};

addButton.addEventListener("click", adicionarAtivo);

generatorButton.addEventListener("click", cliqueiAtivo);

receivedNumber.addEventListener("keydown", keypress);
