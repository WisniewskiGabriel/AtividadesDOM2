let btnGo = document.getElementById("btn-go");
let btnClean = document.getElementById("btn-clean");
let btnRefresh = document.getElementById("btn-refresh");
let userIdElement = document.getElementById("input-userId");
let passwordElement = document.getElementById("input-userPassword");
let inputElementsArray = document.getElementsByClassName("toBeCleaned");
let resultElement = document.getElementById("result");
let msgToUserElement = document.getElementById("msgToUser");



changeResultVisibility("none");

btnGo.addEventListener('click',loginTask);
btnClean.addEventListener('click',cleanForm);
btnRefresh.addEventListener('click',reloadPage);

function loginTask(){

    let objForm = getFormValues();
    let objUserCheck = checkFormValues(objForm);
    let msgAllowed = "Acesso permitido"
    let msgToUser = msgAllowed;

    console.log(objUserCheck.idCorrect);
    console.log(objUserCheck.passwordCorrect);
    console.log(objUserCheck);

    let idCorrect = objUserCheck.idCorrect;
    let passwordCorrect = objUserCheck.passwordCorrect; 

    if(!idCorrect && msgToUser.includes(msgAllowed) ? msgToUser = "Usuário inválido!" : msgToUser);
    if(!passwordCorrect && msgToUser.includes(msgAllowed) ? msgToUser = "Senha incorreta!" : msgToUser);

    console.log(msgToUser);

    msgToUserElement.textContent = msgToUser;

    changeResultVisibility("block");

    console.log(objForm);

}

function getFormValues(){
    
    let objForm = {'id':userIdElement.value,'password':passwordElement.value};
    return objForm;

}

function checkFormValues(objForm){

    let objUserCheck = {'idCorrect':true,'passwordCorrect':true};

    let id = Number(objForm.id);
    let password = Number(objForm.password);

    console.log(objForm);

    if(id !== 1234){
        objUserCheck.idCorrect = false;

    }
    if(password !== 9999){
        objUserCheck.passwordCorrect = false;
    }

    return objUserCheck;

}

function cleanForm(){

    for (let i = 0;i<inputElementsArray.length;i++){
        inputElementsArray[i].value = '';
    }

}

function changeResultVisibility(state){

    resultElement.style.display = state;

}

function reloadPage(){
    window.location.reload();
}