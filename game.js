




function playRound(){

    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    console.log(computerChoice);
    console.log(userChoice);

        if (computerChoice == userChoice) {
            return 'Draw!, Try Again'
        } else if (userChoice == 'rock' && computerChoice == 'paper'){
            score --
            return 'You Lose ' + (computerChoice) + ' beats ' + (userChoice)
        } else if (userChoice == 'paper' && computerChoice == 'scissor'){
            score --
            return 'You Lose ' + (computerChoice) + ' beats ' + (userChoice)
        } else if (userChoice == 'scissors' && computerChoice == 'rock'){
            score--
            return 'You Lose ' + (computerChoice) + ' beats ' + (userChoice)
        } else {
            score++ 
            return 'You Win ' + (userChoice) + ' beats ' + (computerChoice)
        }

         }
// create a function that will have computer select P S or R
function getComputerChoice (){
   let randomnumber = Math.floor(Math.random() * (3 - 1 + 1)+ 1);
   
    if (randomnumber == 1){
        return 'rock'
    } else if (randomnumber == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
    
    }

// create function to prompt user for their game input
function getUserChoice(){
    return prompt('Paper,Scissors or Rock?','').toLowerCase();
}



function game(){
    console.log(playRound())
    console.log(score)
    console.log(playRound())
    console.log(score)
    console.log(playRound())
    console.log(score)
    console.log(playRound())
    console.log(score)
    console.log(playRound())
    console.log(score)

    if (score = 0){
        return 'Draw!'
    } else if (score > 0){
        return 'You Win!'
    } else {
        return 'You Lose!'
    }
}


let score = 0
console.log(game())









// if computer choice is same as user then output 'Draw, Try again'

// if user wins output 'You Win! (userChoice) beats (computerChoice)'

// if user loses output 'You Lose (computerChoice) beats (userChoice)'
