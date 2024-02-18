const prompt = require ('prompt');

prompt.start();

prompt.get(['userSelection'], function(err, result){
    
    const userSelection = result.userSelection.toLowerCase();

    if(userSelection !== 'rock' && userSelection !== 'paper' && userSelection != 'scissors'){
        console.log("Invalid. Select rock, paper or scissors.")
        return;
    }

    console.log("User Selection is " + userSelection);

    const randomNumber = Math.random();

function compSelection(randomNumber){
    if (randomNumber >= 0 && randomNumber <= 0.34){
        return 'paper';
    }
    if (randomNumber >= 0.35 && randomNumber <= 0.67){
        return 'scissors';
    }
    else{
        return 'rock';
    }
    
}

    const computerSelection = compSelection(randomNumber);

    console.log("Computer Selection is " + computerSelection);

    let message;

    if(
        (userSelection==='scissors' && computerSelection==='paper')||
        (userSelection==='paper' && computerSelection==='rock') ||
        (userSelection==='rock' && computerSelection==='scissors') 

    )
    {
        message = "User wins";
    }

    else if(userSelection === computerSelection){
        message = "It's a tie";
    }
    else{
        message = "Computer wins";
    }


    console.log(message);
})