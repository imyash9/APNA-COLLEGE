// Favourite Movie Quiz
alert("Hint: in this movie there are some actors 1. Amitabh bachhan, 2. Anupam Kher, 3. Boman Irani, 4. Danny Denzongpa, 5. Parineeti Chopra Release Date : 2022")

let favMovie = "uunchai";
let guess = prompt("Guess my Favourite Movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess! Please try again");
}

if(guess == favMovie){
    console.log("Congratulations! You guessed Right.");
}
else{
    console.log("You are Quit.")
}