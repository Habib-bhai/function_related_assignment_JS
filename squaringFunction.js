import inquirer from "inquirer"

const squaringFunction = (num) => {
return (num * num)
}

let userEnteredNumber = await inquirer.prompt({
    message:"Enter number to get it's square number",
    type:"number",
    name:"number"
})
let square = squaringFunction(userEnteredNumber.number)
console.log(square)