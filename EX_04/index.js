let peopleTable = [{'gender':"Homem",'name':"Diego",'age':"",'obs':""},
                   {'gender':"Homem",'name':"Gabriel",'age':"",'obs':""},
                   {'gender':"Mulher",'name':"Grazi",'age':"",'obs':""},
                   {'gender':"Mulher",'name':"Amanda",'age':"",'obs':""}];
let subtitleElement = document.getElementById("subtitle-now");
let btnGo = document.getElementById("btn-go");
let ageInputElement = document.getElementById("input-idade");
let resultElement = document.getElementById("result");
let btnRefresh = document.getElementById("refresh");
let hideElements = document.getElementsByClassName("hideWhenCalculating");
let sizeOfArray = peopleTable.length;
let index = 0;
let subtitleNow;
let signForGender;
let ageOfOldestMale = 0;
let ageOfOldestFemale = 0;

toggleResult("none");

signForGender = getSignForGender(peopleTable[index].gender);
subtitleNow = "Idade d"+signForGender+" "+peopleTable[index].name;
subtitleElement.textContent = subtitleNow;

btnGo.addEventListener('click',doTask);
btnRefresh.addEventListener('click',refreshBrowser);


function doTask(){  
    
    let ageNow;
    let indexForSubtitles = index+1;
    let objResults;

    if(indexForSubtitles >= sizeOfArray ? indexForSubtitles = indexForSubtitles-1 : indexForSubtitles);

    signForGender = getSignForGender(peopleTable[indexForSubtitles].gender);
    subtitleNow = "Idade d"+signForGender+" "+peopleTable[indexForSubtitles].name;
    subtitleElement.textContent = subtitleNow;

    ageNow = getAgeNow();
    peopleTable[index].age = ageNow;

    cleanInputField();
    index = advanceIndex(index);
    if((index) >= sizeOfArray){
        objResults = understandAges(peopleTable);
        hideFormElements("none");
        buildResultsDisplay(objResults);
        toggleResult("");
        console.log(objResults);
    }
  
}

function advanceIndex(qtdNow){
    qtdNow = qtdNow + 1;
    return qtdNow
}

function getSignForGender(gender){
    let signForGender;
    if(gender.startsWith("H") ? signForGender = "o" : signForGender = "a");
    return signForGender;
}

function getAgeNow(){
    let ageNow = ageInputElement.value;
    return ageNow;
}

function cleanInputField(){
    ageInputElement.value = '';   
}

function understandAges(peopleTable){

    let highestAgeOfAll = 0;
    let ageNow;

    for(let i = 0;i< sizeOfArray-1;i++){
        ageNow = peopleTable[i].age;
        if(ageNow > highestAgeOfAll ? highestAgeOfAll = ageNow : highestAgeOfAll);
    }
    
    let objResults = {
    'highestAgeOfMale':0,
    'nameOfOldestMale':"",
    'highestAgeOfFemale':0,
    'nameOfOldestFemale':"",
    'lowestAgeOfMale':highestAgeOfAll+1,
    'nameOfYoungestMale':"",
    'lowestAgeOfFemale':highestAgeOfAll+1,
    'nameOfYoungestFemale':"",};

    console.log(peopleTable);

    for(let i = 0;i<(sizeOfArray);i++){
        if(peopleTable[i].gender.startsWith("Homem")){
            if(Number(peopleTable[i].age) > Number(objResults.highestAgeOfMale)){
                objResults.highestAgeOfMale = peopleTable[i].age;
                objResults.nameOfOldestMale = peopleTable[i].name;
            }
        }
        if(peopleTable[i].gender.startsWith("Mulher")){
            if(Number(peopleTable[i].age) > Number(objResults.highestAgeOfFemale)){
                objResults.highestAgeOfFemale = peopleTable[i].age;
                objResults.nameOfOldestFemale = peopleTable[i].name;
            }
        }
    }
    for(let i = 0;i<(sizeOfArray);i++){
        if(peopleTable[i].gender.startsWith("Homem")){
            if(Number(peopleTable[i].age) < Number(objResults.lowestAgeOfMale)){
                objResults.lowestAgeOfMale = peopleTable[i].age;
                objResults.nameOfYoungestMale = peopleTable[i].name;
            }
        }
        if(peopleTable[i].gender.startsWith("Mulher")){
            if(Number(peopleTable[i].age) < Number(objResults.lowestAgeOfFemale)){
                objResults.lowestAgeOfFemale = peopleTable[i].age;
                objResults.nameOfYoungestFemale = peopleTable[i].name;
            }
        }
    }

    return objResults;
}

function hideFormElements(state){
    for(let i = 0;i<hideElements.length;i++){
        hideElements[i].style.display = "none";
    }
}

function toggleResult(state){
   resultElement.style.display = state;
}

function buildResultsDisplay(objResults){

    let soma = Number(objResults.highestAgeOfMale)+Number(objResults.lowestAgeOfFemale);
    let produto = Number(objResults.lowestAgeOfMale)*Number(objResults.highestAgeOfFemale);
    let displaySoma = document.getElementById("display-soma");
    let displayProduto = document.getElementById("display-produto");
 
    displaySoma.textContent =`A soma das idades de ${objResults.nameOfOldestMale} e ${objResults.nameOfYoungestFemale} é ${soma}`;
    displayProduto.textContent =`O produto entre as idades de ${objResults.nameOfYoungestMale} e ${objResults.nameOfOldestFemale} é ${produto}`;

}

function refreshBrowser(){
    window.location.reload();
}