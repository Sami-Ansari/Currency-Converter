#! /usr/bin/env node

import chalk from "chalk";
import showBanner from "node-banner";
import inquirer from "inquirer";

(async () => {
    await showBanner('Currency-Convertion'," ","blue");
})();

setTimeout(async ()=>{
let Convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP":{
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD":{
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
}

const  answer:{
    from: "PKR" |"GBP" | "USD",
    to: "PKR" |"GBP" | "USD",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices:["PKR","GBP","USD"],
        message:"Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices:["PKR","GBP","USD"],
        message:"Select your conversation currency: "
    },
    {
        type: "number",
        name: "amount",
        message:"Enter your conversation amount : "
    },
]);

const {from, to , amount} = answer;

if (from && to && amount) {
        let result = Convertion[from][to] * amount
        console.log(chalk.blue(`Your conversion from ${from} to ${to} is ${result}`));
}else{
    console.log(chalk.red("Invalid inputs"));
}
 },1000)
