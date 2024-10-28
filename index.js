#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 - 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("Sorry! you guessed wrong number.");
}
