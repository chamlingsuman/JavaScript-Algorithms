//Palindrome Checker
function palindrome(str) {
    const alphanumericOnly = str
    //lowerCase our input
      .toLowerCase()
    //look for alphanumeric characters only(letter and number)  
      .match(/[a-z0-9]/g);
    //return string === reversedString  
      return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
  }
  
 palindrome("eye");