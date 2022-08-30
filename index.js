function isPalindrome(word) {
  // Write your algorithm here
  // converting the string to array
  const wordToArray=word.split('');
  //Reversing the array values 
  const reverseWordToArray=wordToArray.reverse();
  //Converting the reversed array back to a string
  const reversedString=reverseWordToArray.join('');
  //-Check if the reversed string is equal to the input string
  if(word==reversedString){

    return true;
    //console.log("This is a palindrome")
  }
  else{
    return false;
    //console.log("Not a palindrome")
  }
}

/* 
  Add your pseudocode here
- Given a string, convert it to array
- Reverse the array values 
- Convert the reversed array back to a string
-Check if the reversed string is equal to the input string
-If equal return false 
-else return true
-perform checks if work can be read from the back

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
