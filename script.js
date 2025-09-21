document.addEventListener("DOMContentLoaded", function() {

function getConsoleInput(){
	const min = 1;
	const max = 3;

		const choice = Math.floor(Math.random() * (max - min + 1) + 1);
		let consoleChoice;
		switch(choice) {
	    	  case 1:
	    	  consoleChoice = "Scissors";
	   	   break;
	      	case 2:
	      	consoleChoice = "Paper";
	      	break;
	      	default:
	      	consoleChoice = "Rock";
	      	break;
	}
	console.log("My choice: " + consoleChoice);
	return consoleChoice;
}

function getPlayerInput(){
	const playerChoice = prompt("Rock, Paper, Scissors... SHOOT!");
	console.log("Your choice: " +  playerChoice);
	return playerChoice;
}




function playRound(consoleChoice, playerChoice){
	let playerWon = false;
	let consoleWon = false;

	if(playerChoice == consoleChoice){
		console.log("Draw");
	} else if(playerChoice === "Scissors" || playerChoice === "scissors"){

		switch(consoleChoice){
		case "Paper":
		playerWon = true;
		
		break;
		case "Rock":
		consoleWon = true;
		
		break;
		}
	} else if(playerChoice === "Paper" || playerChoice === "paper"){

		switch(consoleChoice){
		case "Rock":
		playerWon = true;
		
		break;
		case "Scissors":
		consoleWon = true;
		
		break;}
	} else if(playerChoice == "Rock" || playerChoice == "rock"){

		switch(consoleChoice){
		case "Scissors":
		playerWon = true;
		
		break;
		case "Paper":
		consoleWon = true;
		
		break;}
	} else {
	
	console.log("No Fair!!");
	}

	const roundMessage = playerWon ? "You won this round!" : "Better luck next time";
	console.log(roundMessage);
	if(playerWon){
	return "Player";
	} else {
	return "Console";
	}
}
	
function playGame(){
	let playerScore = 0;
	let consoleScore = 0;
	let winner;

	for(round = 1; round <= 5; round++){
	console.log("Round " + round);
	const consoleChoice = getConsoleInput();
	const playerChoice = getPlayerInput();
	winner = playRound(consoleChoice, playerChoice);
	if(winner === "Player"){ 
		playerScore += 1 ;
	} else{
		consoleScore += 1;
	}

	
}
	if(playerScore > consoleScore){
		alert(`You win! Check the console to see how you did. Final score: ${playerScore} ${consoleScore}`);
	} else{
		alert(`I win! Good game, Check the console to see how you did. Final score: ${playerScore} ${consoleScore}`);
	}

}

playGame();


 }); 
