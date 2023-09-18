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


 //Roman Numeral Converter
 function convertToRoman(num) {
  //CREATE ROMAN NUMERAL TO NUMBER LOOKUP TABLE
  const lookupTable = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL: 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  };
// CREATE ROMAN NUMERAL ACCUMULATOR
let accumulator = '';

// LOOP THROUGH LOOKUP TABLE
for(const key in lookupTable){
  const numberValue = lookupTable[key];
  //console.log(key, numberValue);
//IF CURRENTNUMBER  <= NUM THEN SUBTRACT CURRENTNUMBER FROM NUM. ADD SYMBOL TO ACCUMLATOR.
 while(numberValue <= num){
  num -= numberValue;
  accumulator += key;
 }

}
//RETURN ACCUMULATOR
  return accumulator
 }
 
 convertToRoman(36);



 //