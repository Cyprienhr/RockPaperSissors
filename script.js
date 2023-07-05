function getComputerChoice(){
    let choices=["rock","paper","sissors"];
    let choice = Math.floor(Math.random()*choices.length);
    let computerChoice = choices[choice];
    return computerChoice;
}
function playRound(computerSelection , playerSelection){
    if ( computerSelection === "rock" && playerSelection ==="sissors"
       || computerSelection === "paper" && playerSelection === "rock"
       || computerSelection === "sissors"  && playerSelection === "paper"){
        return "you lose! "+computerSelection+" beats "+playerSelection;
       }
       else if(playerSelection === "rock" && computerSelection ==="sissors"
       || playerSelection === "paper" && computerSelection === "rock"
       || playerSelection === "sissors"  && computerSelection === "paper" ){
        return "you win ! "+playerSelection+" beats "+computerSelection;
       }
       else{
        return "Draw";
       }
}


function game()
{
    let computerScore = 0;
    let playerScore = 0;
    for( let i =0 ; i<5;i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("enter your weapon rock , paper or sissors");
        let result = playRound(computerSelection,playerSelection);
        console.log(result);
        if(result.startsWith("you lose! ")){
            computerScore++ ;
        }
        else if(result.startsWith("you win ! ")){
            playerScore++;
        }
    }
  if (playerScore > computerScore){
    console.log("CONGLATULATIONS! YOU WON THE GAME");
  }
  else if (computerScore > playerScore){
    console.log("SORRY YOU LOSE THE GAME");
  }
  else{
    console.log("GAME IS DRAW");
  }
}
game();