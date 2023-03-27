const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}


function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || 
            playerSelection == "paper" && computerSelection == "scissors" ||   
            playerSelection == "scissors" && computerSelection == "rock")
            {
                return "Computer";
            }
    else    {
                return "Player";
            }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Computer"){
        return "Computer Win"
    }
    else{
        return 'Player Win!'
    }
    
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------");
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!");
    }
    else if(scoreComputer < scorePlayer){
        console.log("Player was the winner!");
    }
    else{
        console.log("It's a Tie!");
    }
}

game()


