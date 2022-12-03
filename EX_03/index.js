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

    let saldo = ((Number(elementSaldo.value)) + (Number(elementCredito.value))) - (Number(elementDebito.value));
    let status;

    if(saldo>0 ? status = "Saldo positivo" : status = "Saldo negativo");

    console.log(status);

    displaySaldoAtual.textContent = `R\$ ${saldo.toFixed(2)}`;
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