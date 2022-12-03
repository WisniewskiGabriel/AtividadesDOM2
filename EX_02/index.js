let elementResultados = document.getElementById("results");
let btnCalcular = document.getElementById("btnCalcular");
let elementInput = document.getElementById("input-horas");
let showResults = false;
let hourlySalary = 1;
let overtimeRaisePercentage = 50;
let maxAmountRegularHours = (40*4);
let displayHourlySalary = document.getElementById("hourly-salary");
let displayTotalHours = document.getElementById("display-total-hours");
let displayRegularSalary = document.getElementById("display-regular-salary");
let displayOvertimeSalary = document.getElementById("display-overtime-salary");
let displayTotalSalary = document.getElementById("display-total-salary");


hideResults();
btnCalcular.addEventListener('click',doAllTasks);

function doAllTasks(){

    let integerIsValid = false;
    let objResults;
    let workedHours;

    workedHours = getWorkedHours();
    console.log(workedHours);
    integerIsValid = checkIntegerValidity(workedHours);
    emptyInput(elementInput);
    
    if(!integerIsValid){
        window.location.reload();
        throw "ERRO NO INPUT";
    }

    objResults = organizeValues(workedHours,maxAmountRegularHours,hourlySalary,overtimeRaisePercentage);
    console.log(objResults);

    displayHourlySalary.textContent = `R\$${hourlySalary.toFixed(2)}`;
    displayTotalHours.textContent = workedHours;
    displayRegularSalary.textContent = objResults.regularSalary;
    displayOvertimeSalary.textContent = objResults.overtimeSalary;
    displayTotalSalary.textContent = objResults.totalSalary;

    exhibitResults();


}

function getWorkedHours(){
    workedHours = elementInput.value;
    return workedHours;
}

function organizeValues(workedHours, maxAmountRegularHours, hourlySalary, overtimeRaisePercentage){

    let regularHours = 0;
    let overtimeHours = 0;
    let objResults;
    let regularSalary = 0;
    let overtimeSalary = 0;
    let totalSalary = 0;
    workedHours = Number(workedHours);
    maxAmountRegularHours = Number(maxAmountRegularHours);

    if(workedHours >= maxAmountRegularHours){
        regularHours = maxAmountRegularHours;
        workedHours = Number(workedHours)-Number(regularHours);
        overtimeHours = workedHours;
    }

    if(workedHours < maxAmountRegularHours){
        regularHours = workedHours;
        workedHours = Number(regularHours)-Number(workedHours);
        overtimeHours = workedHours;
    }

    regularSalary = (regularHours * hourlySalary);
    overtimeSalary = overtimeHours * (((hourlySalary/100)*overtimeRaisePercentage)+(hourlySalary));
    totalSalary = overtimeSalary+regularSalary;

    regularSalary = transformIntoBeautifulMonetaryString(regularSalary);
    overtimeSalary = transformIntoBeautifulMonetaryString(overtimeSalary);
    totalSalary = transformIntoBeautifulMonetaryString(totalSalary);

    objResults =    {'regularHrs':regularHours,
                     'overtimeHrs':overtimeHours,
                     'regularSalary':regularSalary,
                     'overtimeSalary': overtimeSalary,
                     'totalSalary':totalSalary};

    return objResults;

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

function checkIntegerValidity(intValue){

    let integerIsValid=false;
    let errorAlertIsDeployed;

    if(!intValue.length>0 && !errorAlertIsDeployed){
        integerIsValid=false;
        errorAlertIsDeployed=true;
        deployErrorAlert("O input estava vazio. Digite algo.");
    }
    if(isNaN(intValue) && !errorAlertIsDeployed){
        integerIsValid=false;
        errorAlertIsDeployed=true;
        deployErrorAlert("O input não era numérico.");
    }

    if(!errorAlertIsDeployed){
        integerIsValid = true;
    }

    return integerIsValid;

}

function deployErrorAlert(strError){
    alert("Aqui deveria haver um modal que diz: \n"+strError);
}

function emptyInput(elemento){
    elemento.value = '';
}

function transformIntoBeautifulMonetaryString(intValue){
    
    let strValue = "R$ "+intValue.toFixed(2);
    return strValue;
    
}