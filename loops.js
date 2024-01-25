/**
 * 1. Write down the program that takes input from user and print it's table using for-loop. 
 */

//input from user
let number = prompt("Enter a number: ");
//parsing the number to integer
number = parseInt(number);
if(isNaN(number)){
    console.log("Invalid input, please enter number");
} else {
    console.log(`Table of ${number} is: `);
    const divTableElement = document.getElementById("table");
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${result}`);  
        //document.write(" "+result); 
        //console.log(document.getElementById("table").textContent); 
        const divElement = document.createElement("div");
        divElement.textContent = result;
        divTableElement.appendChild(divElement);
    }
}