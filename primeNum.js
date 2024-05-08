// write a JS function that accepts a number as a parameter and checks whether it is prime or not using recursion
import inquirer from "inquirer"

function isPrime(number) {
    if (number <= 1) { //base case
      return false;
    }
    // Iterate through potential divisors from 2 up to the square root
    

    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Divisible by a number other than 1 and itself, not prime
      }
    }
    return true; // No divisors found, prime number
  }
  
  const numberToCheck = await inquirer.prompt({
    message:"Enter a number to check whether it is prime or not",
    type:"number",
    name:"numAnswer"
  }) 
  if (isPrime(numberToCheck.numAnswer)) {
    console.log(`${numberToCheck.numAnswer} is a prime number.`);
  } else {
    console.log(`${numberToCheck.numAnswer} is not a prime number.`);
  }
  