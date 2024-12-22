let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let upts = 0;
let cpts = 0;

function computer(){

    let choices = ["rock" , "paper" , "scissors"];
    let randIdx = Math.floor(Math.random() * 3);

    return choices[randIdx];

}


function game(button){

    console.log("User's Choice:", button);

    const AI = computer(); 

    console.log("Computer's Choice:", AI);
  
    

    if (button === AI) {

    console.log("It's a Draw!!");
    document.getElementById("result").innerText = "It's a Draw !!";

    }

    else if (

        (button === 'rock' && AI === 'scissors') ||
        (button === 'paper' && AI === 'rock') ||
        (button === 'scissors' && AI === 'paper')

    ){
        
    console.log("You Win!!");
    document.getElementById("result").innerText = "You Win !!";

    upts = upts + 1;

    document.getElementById("user").innerText = upts;

    }
     
    else {

    console.log("You Lose !!");
    document.getElementById("result").innerText = "You Lose !!";
    
    cpts = cpts + 1;

    document.getElementById("Computer").innerText = cpts;

    }
}

let timer = 60;
const time = document.getElementById("timer");

const countdown = setInterval(function() {

    if (timer <= 0) {

    clearInterval(countdown);
    
    time.innerHTML = "Time's up!";
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissors.style.visibility = "hidden";


    if(upts > cpts){

    alert("You Won the Match !!");

    }

    else if (cpts > upts){

    alert("Computer Won the Match !!");

    }

    else{

    alert("It's a Draw !!")

    }

    } 
    
    else {

    time.innerHTML = timer + " seconds remaining";
        
    }

    timer -= 1;
    
}, 1000);
