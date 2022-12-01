let elementResultados = document.getElementById("results");
let btnCalcular = document.getElementById("btnCalcular");
let elementInput = document.getElementById("input-horas");
let showResults = false;
let minWage = 1000;
let weeksInMonth = 4;
let maxAmountRegularHours = 40;
let regularHours;
let overtimeHours;
let workedHours;


hideResults();

btnCalcular.addEventListener('click',getWorkedHours);

function getWorkedHours(){
    workedHours = elementInput.value;
    console.log(workedHours);
    return workedHours;
}

function calculateValues(){
    
}

function hideResults(){
    showResults = false;
    showResultsVisibility(showResults);
}

function exhibitResults(){
    showResults = true;
    showResultsVisibility(showResults);
}

function showResultsVisibility(showResults){


    let strVisibilityValue;

    if (showResults){
        strVisibilityValue = "visible";
    }
    if (!showResults){
        strVisibilityValue = "hidden";
    }


    elementResultados.style.visibility = strVisibilityValue;
}

