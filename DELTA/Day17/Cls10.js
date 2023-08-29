// let i = 1;
// while(i<=5){
//     if(i==4){
//        break;
//     }
//     console.log(i);
//     i++
// }

const favMovie = "uunchai";
let guess = prompt("Guess My favourite movie");

while(guess != favMovie){
    if(guess == "quit"){
        console.log("You are quit");
        break;
    }
    guess = prompt("Wrong guess Please try again");
}

if(guess == favMovie){
    console.log("congratulations");
}
