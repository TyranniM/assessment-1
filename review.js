let name = "tyranni"; //string
const age = 22; // int
let pi = 3.14; // float
let trueOrFalse = true; // Bool




// checks to see if a statement is true

if (trueOrFalse) {
    return "true"
}

//checks to see if a value is false
if (!trueOrFalse) {
    return "false"
}
//default value if the first condition isnt met

else {
    return "true"
}

let favoriteColor = "red";
if (favoriteColor === "blue") {
    return "blue";
} else if (favoriteColor === "green") {
    return "green";
} else if (favoriteColor === "red") {
    return "red"
}

// Loops
while (trueOrFalse) {
    console.log("true");
}

let counter = 0;
while (trueOrFalse) {
    console.log("true");
    counter++;
    if (counter === 10) {
        trueOrFalse = false;
    }
}

for (i = 0; i < 100; i++) {
    console.log(i)
}
for (i = 1000; i > 0; i--) {
    console.log(i)
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let four = numbers[3]

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}



function redOrBlue(value) {
    if (value === true) {
        return "blue"
    } else {
        return "red"
    }
}




//array methods

numbers.sort ();// - sorts from largest to smallest
numbers.split(" ")
numbers.splice (4,0,8); // inserts 8 
numbers.push(); // add number to end of array
numbers.pop ()
numbers.unshift
numbers.shift
numbers.join (" ")
numbers.reduce()
numbers.map()
numbers.filter()










