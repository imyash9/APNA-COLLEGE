function oddEvenTest(request) {

    if (request == "odd") {
        let odd = function (n) {
          console.log(!(n % 2 == 0));
        }; 

        return odd;
    }  

    else if (request == "even") {
        let even = function (n) {
          console.log(n % 2 == 0);
        };

        return even;
    }  

    else {
      console.log("Wrong request");
    }
}

// let request = "odd";
// let funcodd = oddEvenTest(request);
// funcodd(4);
// funcodd(5);


let request = "even";
let funceven = oddEvenTest(request);
funceven(4);
funceven(5);

