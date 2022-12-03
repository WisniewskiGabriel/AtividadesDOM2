let elementConta = document.getElementById("num-conta");
let elementSaldo = document.getElementById("saldo");
let elementDebito = document.getElementById("debito");
let elementCredito = document.getElementById("credito");
let elementModal = document.getElementById("result");
let elementBtnGo = document.getElementById("btn-go");
let displaySaldoAtual = document.getElementById("saldo-atual")
let displayStatusConta = document.getElementById("status-conta")
let elementBtnClose = document.getElementById("btn-close");
let elementFieldset = document.getElementsByTagName("fieldset")[0];

hideModal();

elementBtnGo.addEventListener('click',doAllTasks);
elementBtnClose.addEventListener('click',cleanItUp);

function doAllTasks(){

    let status;    
    let saldo = ((Number(elementSaldo.value)) + (Number(elementCredito.value))) - (Number(elementDebito.value));
    let numConta = elementConta.value;

    console.log(saldo);
    
    saldo = `Saldo atual da conta ${numConta}:\n R\$${saldo.toFixed(2)}`;

    if(saldo>0 ? status = "Saldo positivo" : status = "Saldo negativo");

    console.log(status);

    displaySaldoAtual.textContent = saldo;
    displayStatusConta.textContent = status;

    showModal();

}

function showModal(){
    elementModal.style.display = "flex";
}
function hideModal(){
    elementModal.style.display = "none";
}

function cleanItUp(){
    hideModal();
    window.location.reload();    
}