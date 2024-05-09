// Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 
// Program:->

function reverseWords(str) { 
    let words = str.split(' '); 
    let reversedWords = []; 
     
    for (let i = words.length - 1; i >= 0; i--) { 
      reversedWords.push(words[i]); 
    } 
     
    return reversedWords.join(' '); 
  } 
   
  let reversedString = reverseWords("Hello world"); 
  console.log(reversedString); // Output: "world Hello" 