let fruits = ["mango", "litchi", "Apple", "Orange", "Banana"]

for(fruit of fruits){
    console.log(fruit);
}

let name = "Yash";

for(char of name){
    console.log(char);
}

let fruits1 = [["Mango", "Apple", "Litchi", "Banana"],[ "Orange", "Grapes", "Guava", "Papaya"]];

for(list of fruits1){
    console.log(list);

    for(fruit of list){
        console.log(fruit);
    }
}