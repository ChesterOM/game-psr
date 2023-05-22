
let score = 0



function playRock(){

    const computerChoice = getComputerChoice();
    const userChoice = 'rock';

    console.log(computerChoice);
    console.log(userChoice);

        if (computerChoice == userChoice) {
            console.log( 'Draw!, Try Again')
        } else if (computerChoice == 'paper'){
            score --
            console.log( 'You Lose ' + (computerChoice) + ' beats ' + (userChoice))
        } else {
            score++
            console.log( 'You Win ' + (userChoice) + ' beats ' + (computerChoice))   
        }
        console.log(score)
         }


function playPaper(){

    const computerChoice = getComputerChoice();
    const userChoice = 'paper';

    console.log(computerChoice);
    console.log(userChoice);

        if (computerChoice == userChoice) {
            console.log( 'Draw!, Try Again')
        } else if (computerChoice == 'scissors'){
            score --
            console.log( 'You Lose ' + (computerChoice) + ' beats ' + (userChoice))
        } else {
            score++
            console.log( 'You Win ' + (userChoice) + ' beats ' + (computerChoice))   
        }
        console.log(score)
         }

function playScissors(){

        const computerChoice = getComputerChoice();
        const userChoice = 'scissors';

        console.log(computerChoice);
        console.log(userChoice);
    
            if (computerChoice == userChoice) {
                console.log( 'Draw!, Try Again')
            } else if (computerChoice == 'rock'){
                score --
                console.log( 'You Lose ' + (computerChoice) + ' beats ' + (userChoice))
            } else {
                score++
                console.log( 'You Win ' + (userChoice) + ' beats ' + (computerChoice))   
            }
            console.log(score)
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

}

function game(){

}

document.getElementById('rock').addEventListener('click', playRock)

document.getElementById('paper').addEventListener('click', playPaper)

document.getElementById('scissors').addEventListener('click', playScissors)







//     if (score = 0){
//         return 'Draw!'
//    } else if (score > 0){
//         return 'You Win!'
//     } else {
//         return 'You Lose!'
//  }





    










// if computer choice is same as user then output 'Draw, Try again'

// if user wins output 'You Win! (userChoice) beats (computerChoice)'

// if user loses output 'You Lose (computerChoice) beats (userChoice)'
