//Q.NO.01 write a JS function that accepts a string as a parameter and counts the number of vowels in the String.

const vowelChecker = (sentence) => {
    let strArray = Array.from(sentence);
    let vowels = ["a", "e", "i", "o", "u"]
    let vowelCount = strArray.filter(elem => {
      const lower = elem.toLowerCase();
      return vowels.includes(lower); // Check if element is a vowel and return true
    });

  
  
    return vowelCount.length;
  };
  
  let vowelCount = vowelChecker("Anees");
  console.log(vowelCount); // Output: 3
  


