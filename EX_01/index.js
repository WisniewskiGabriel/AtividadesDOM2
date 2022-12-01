let voteValue = 0;
let votesTotal = 0;
let qtdVotos13 = 0;
let qtdVotos22 = 0;
let qtdVotosNulos = 0;
let isNull = false;
let voteIsAttributed = false;
let displayVotes13 = document.getElementById("display13");
let displayVotes22 = document.getElementById("display22");
let displayVotesNulos = document.getElementById("displayNulos");
let voteSelector = document.getElementById("num-candidato");
let resultadoCalculo;

function pegarVoto(isNull){ 

    console.log(isNull);

    voteIsAttributed = false;
    voteValue = voteSelector.value;
    voteSelector.value = '';
    voteValue = Number(voteValue);
    votesTotal = votesTotal+1;

    if (isNull){
        voteIsAttributed = true;
        qtdVotosNulos = qtdVotosNulos+1;
    }

    if (voteValue === 13 && !voteIsAttributed) {
        qtdVotos13 = qtdVotos13+1;
        voteIsAttributed = true;
    }
    if (voteValue === 22 && !voteIsAttributed) {
        qtdVotos22 = qtdVotos22+1;
        voteIsAttributed = true;
    }

    if(!voteIsAttributed){
        qtdVotosNulos = qtdVotosNulos+1;
    }

    console.log("Total: "+votesTotal+"\n13: "+qtdVotos13+"\n22: "+qtdVotos22+"\nNulos: "+qtdVotosNulos);
    
    if (qtdVotos13 > 0){
        calcularMedia(votesTotal,qtdVotos13);
        displayVotes13.textContent = resultadoCalculo;
    }
    if (qtdVotos22 > 0){

        calcularMedia(votesTotal,qtdVotos22)
        displayVotes22.textContent = resultadoCalculo;
    }
    if (qtdVotosNulos > 0){
        calcularMedia(votesTotal,qtdVotosNulos)
        displayVotesNulos.textContent = resultadoCalculo;
    }
}

function calcularMedia(total,qtdMenor){
    
        resultadoCalculo = ((qtdMenor*100)/total).toFixed(2)+"%";
    return resultadoCalculo;

}