let btnGo = document.getElementById("btnGo");
let inputProductName = document.getElementById("product-name");
let inputProductQty = document.getElementById("product-qty");
let inputProductValue = document.getElementById("product-value");
let resultElement = document.getElementById("result");
let btnReload = document.getElementById("btn-reload");

visibilityOfResult("none");
btnGo.addEventListener('click',calculateItAll);
btnReload.addEventListener('click',reloadPage);
function calculateItAll(){

    let discountPercentage;
    let objValues = getInputValues();

    discountPercentage = getDiscountPercentage(objValues.qty);

    fillDisplays(objValues,discountPercentage);
    visibilityOfResult("flex");
   
}

function getDiscountPercentage(productQty) {

    let discountPercentage = 0;

    if(!productQty.length>0 | isNaN(Number(productQty))){
        alert("INPUT DE QUANTIDADE INVÁLIDO");
        window.location.reload()
    }

    if(productQty>0 && productQty<=5){
        discountPercentage = 2;
        return discountPercentage;
    }

    if(productQty>5 && productQty<=10){
        discountPercentage = 3;
        return discountPercentage;
    }

    if(productQty>10){
        discountPercentage = 5;
        return discountPercentage;
    }

}

function getInputValues(){

    let objValues = {'name':inputProductName.value,
                     'qty':inputProductQty.value,
                     'value':inputProductValue.value};

    return objValues;
}

function fillDisplays(objValues,discountPercentage){

    let displayName = document.getElementById("display-name");
    let displayQtd = document.getElementById("display-qtd");
    let displayValueBefore = document.getElementById("display-valueBefore");
    let displayDiscount = document.getElementById("display-discount");
    let displayValueAfter = document.getElementById("display-valueAfter");

    displayName.textContent = objValues.name;
    displayQtd.textContent = objValues.qty;
    displayValueBefore.textContent = `R\$ ${(objValues.qty * objValues.value).toFixed(2)}`;
    displayDiscount.textContent = `R\$ ${(((objValues.qty * objValues.value) / 100) * discountPercentage).toFixed(2)}`;
    displayValueAfter.textContent = `R\$ ${(((objValues.qty) * (objValues.value)) - (((objValues.qty * objValues.value) / 100) * discountPercentage)).toFixed(2)}`;
}

function visibilityOfResult(state){
    resultElement.style.display = state;
}
function reloadPage(){
    window.location.reload();
}