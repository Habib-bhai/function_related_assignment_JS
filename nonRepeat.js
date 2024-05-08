// write a JS function to find the first non-Repeated Character

import inquirer from "inquirer"

let firstNonRepeated= (str) => {
const char  = {}
for (const iterator of str) {
    char[iterator] = (char[iterator] || 0) +1
}

console.log(char)
for (const iterator of str) {
    if(char[iterator]===1)
    {
        return iterator
    }
}

}
let stringByUser = await inquirer.prompt({
    message:"Enter a string to check it's first non repeated Char",
    type:"input",
    name:"strByUser"
})
let nonRepeated =firstNonRepeated(stringByUser.strByUser)
console.log(`${nonRepeated}, is the first non-Repeated Character`)
  
