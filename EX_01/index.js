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
        displayVotes13.textContent = ((qtdVotos13*100)/votesTotal).toFixed(2)+"%";
    }
    if (qtdVotos22 > 0){
        displayVotes22.textContent = ((qtdVotos22*100)/votesTotal).toFixed(2)+"%";
    }
    if (qtdVotosNulos > 0){
        displayVotesNulos.textContent = ((qtdVotosNulos*100)/votesTotal).toFixed(2)+"%";
    }
}
