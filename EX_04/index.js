let subtitleElement = document.getElementById("subtitle-now");
let btnGo = document.getElementById("btn-go");
let ageInputElement = document.getElementById("input-idade");
let index = 0;
let subtitleNow;
let signForGender;
let ageOfOldestMale = 0;
let ageOfOldestFemale = 0;
let peopleTable = [{'gender':"Homem",'name':"Diego",'age':"",'obs':""},
                   {'gender':"Homem",'name':"Gabriel",'age':"",'obs':""},
                   {'gender':"Mulher",'name':"Grazi",'age':"",'obs':""},
                   {'gender':"Mulher",'name':"Amanda",'age':"",'obs':""}];
let sizeOfArray = peopleTable.length;
console.log(index);

signForGender = getSignForGender(peopleTable[index].gender);
subtitleNow = "Idade d"+signForGender+" "+peopleTable[index].name;
subtitleElement.textContent = subtitleNow;

btnGo.addEventListener('click',doTask);

function doTask(){  
    
    let ageNow;
    let indexForSubtitles = index+1;

    if(indexForSubtitles >= sizeOfArray ? indexForSubtitles = indexForSubtitles-1 : indexForSubtitles);

    signForGender = getSignForGender(peopleTable[indexForSubtitles].gender);
    subtitleNow = "Idade d"+signForGender+" "+peopleTable[indexForSubtitles].name;
    subtitleElement.textContent = subtitleNow;

    ageNow = getAgeNow();
    peopleTable[index].age = ageNow;
    console.log(peopleTable);

    cleanInputField();
    index = advanceIndex(index);
    if((index) >= sizeOfArray){
        console.log(index);
        understandAges(peopleTable);
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
    console.log(peopleTable);
    
}