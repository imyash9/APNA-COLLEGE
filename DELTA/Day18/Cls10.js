let random = prompt("Enter a maximum Number");

let num = Math.floor(Math.random() * random ) + 1;

// console.log(num);

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit"){
        console.log("you are quit");
        break;
    }
    else if(guess == num){
        console.log("You Guessed right number CONGRATULATONS! the random number was", num);
        break;
    }
    else if(guess < random){
        guess = prompt("Small Number please guess a great number");
    }
    else if(guess > random){
        guess = prompt("Great Number please guess a small number");
    }


    // else{
    //     guess =  prompt("your guess was wrong please try again");
    // }

}