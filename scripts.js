let addButton = document.querySelector("input#add-button")
let generatorButton = document.querySelector("input#generator-button")
let receivedNumber = document.querySelector("input#received-number")
let select = document.querySelector("select#select-select")
let text = document.createElement("option")

const table = []

function adicionarAtivo (){

    let numberValue = receivedNumber.value
//adicionar()
    table.push(numberValue)
    console.log(text)
    select.innerHTML += `<option> Valor ${numberValue} adicionado. </option>`
    
console.log(table)
//validar()


}


const cliquei = () => console.log("cliquei")


addButton.addEventListener('click', adicionarAtivo)

generatorButton.addEventListener('click', cliquei)