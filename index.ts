#! /usr/bin/env node
import inquirer from "inquirer";

// asking questions from users through inquirer

let answer = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstNumber" },
    {message: "enter second number", type: "number", name: "secondNumber"},
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtractions", "multiplication", "division"],
    },
]);

// conditional statements if-else

if(answer.operator === "addition"){
console.log(answer.firstNumber + answer.secondNumber)
}
else if (answer.operator === "subtractions"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "multiplication"){
console.log(answer.firstNumber * answer.secondNumber)
}
else if (answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber)
} 
else{
    console.log("invalid input")
}