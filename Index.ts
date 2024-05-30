#!/usr/bin/env node

import inquirer from "inquirer";

console.log(" ",`=====================================`)
console.log(" ","Welcom to Mini Calculator CLI Project");
console.log(" ",`=====================================\n`)

let myLoop = true;

while (myLoop) {
  let userInput = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter your First Number : -",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter your Second Number : -",
    },
    {
      type: "list",
      name: "operator",
      message: "Select the operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);

  let { num1, num2, operator } = userInput;

  if (operator === "Addition") add();
  if (operator === "Subtraction") sub();
  if (operator === "Multiplication") multi();
  if (operator === "Division") divi();

  function add() {
    console.log(" ", `${num1} + ${num2} = ${num1 + num2}`);
  }
  function sub() {
    console.log(" ", `${num1} - ${num2} = ${num1 - num2}`);
  }
  function multi() {
    console.log(" ", `${num1} * ${num2} = ${num1 * num2}`);
  }
  function divi() {
    console.log(" ", `${num1} / ${num2} = ${num1 / num2}`);
  }
//   for more calculation
let calculationAgain = await inquirer.prompt({
    type:"confirm",
    name: "more",
    message:"Do you want more calculation?",
    default : false
})
if (!calculationAgain.more) {
    myLoop = false;
    console.log(`\nThank you for using Mini Calculator!`)
}
}
