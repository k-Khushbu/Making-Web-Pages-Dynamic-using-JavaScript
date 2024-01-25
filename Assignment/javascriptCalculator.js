// Calculation function
function calc(){
    //Declaration of the variables
    let number1, number2, result, operator;
    //read the value from text boxes
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    operator = parseInt(document.getElementById("operator").value);
    //select operator using switch case statement
    switch (operator) {
        case 1: //Addition of numbers
            result=number1+number2;
            document.getElementById("answer").value=result;
            break;
        case 2: //Subtraction of numbers
            result=number1-number2;
            document.getElementById("answer").value=result;
            break;
        case 3: //Multiplication of numbers
            result=number1*number2;
            document.getElementById("answer").value=result;
            break;
        case 4: //Division of numbers
            result=number1/number2;
            document.getElementById("answer").value=result;
            break;
        case 5: //Mod of numbers
            result=number1%number2;
            document.getElementById("answer").value=result;
            break;
        default:
	    //selection of wrong option print the following message
            //console.log("Select a valid operator");
            document.getElementById("message").textContent = "Select a valid operator";
            break;
    }
}

//clear the answer field by changing the input
const formElement = document.getElementById("form");
// const operatorElement = document.getElementById("operator");
const answerElement = document.getElementById("answer");
formElement.addEventListener("input", function(event){
    console.log(event.target.value);
    answerElement.value = "";
    if(event.target.value=="input"){
        answerElement.value = "";
    }
});
