function getComputerChoice(){
    let choices=["rock","paper","sissors"];
    let choice = Math.floor(Math.random()*choices.length);
    let computerChoice = choices[choice];
    return computerChoice;
}
function playRound(computerSelection , playerSelection){
    if ( computerSelection === "rock" && playerSelection ==="sissors"
       || computerSelection === "paper" && playerSelection === "rock" ){
        return "you lose! "+computerSelection+" beats "+playerSelection;
       }
       else if(playerSelection === "rock" && computerSelection ==="sissors"
       || playerSelection === "paper" && computerSelection === "rock" ){
        return "you win ! "+playerSelection+" beats "+computerSelection;
       }
       else{
        return "Tie";
       }
}
let computerSelection = getComputerChoice();
let playerSelection = prompt("enter your weapon rock , paper or sissors");
console.log( playRound(computerSelection,playerSelection));