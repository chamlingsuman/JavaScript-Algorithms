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
  return accumulator;
 }
 
 convertToRoman(36);



 //Caesars Cipher
 const alphabet =[
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
 ];
 function rot13(str) {
  //CREATE ACCUMULATOR
  let accumulator = "";
  //LOOP THROUGH THE STRING
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    const isALetter = alphabet.includes(char);
    //IF CHAR IS NOT LETTER, ADD TO ACCUMULATOR
    if(isALetter === false){
      accumulator += char;
    }else{
      const charIndex = alphabet.findIndex((c) => c === char)
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
    //ELSE ROTATE + OR - 13, ADD TO ACCUMULATOR
  }
  return accumulator;
}

rot13("SERR PBQR PNZC");



//Telephone Number Validator
function telephoneCheck(str) {
  const validPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,

    /^1 \d{3}-\d{3}-\d{4}$/,

    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    /^\d{10}$/,

    /^\(\d{3}\)\d{3}-\d{4}$/,

    /^1 \d{3} \d{3} \d{4}$/,

    /1\(\d{3}\)\d{3}-\d{4}/
  ]

  return validPatterns
  .some((pattern) => pattern.test(str));
}

telephoneCheck("555-555-5555");


//Cash Register
function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  //console.log(change)
  let cidTotal = 0;
  for(let elem of cid){
  //console.log(elem);
    cidTotal += elem[1] * 100;
  // console.log(cidTotal);
  }
   if(change > cidTotal){
     return{status: "INSUFFICIENT_FUNDS", change: []};
   }else if (change === cidTotal){
     return {status: "CLOSED",change : cid};
   }else{
     let result = []; //final result for later

     //console.log(cid);
     cid = cid.reverse();
     //console.log(cid);
     let currencyUnit ={
       "ONE HUNDRED": 10000,
       "TWENTY": 2000,
       "TEN": 1000,
       "FIVE": 500,
       "ONE": 100,
       "QUARTER": 25,
       "DIME": 10,
       "NICKEL": 5,
       "PENNY": 1
     }
     for(let elem of cid){
       let moneyHolder = [elem[0],0];
       //console.log(moneyHolder);
       elem[1] = elem[1] * 100;
       while(change >= currencyUnit[elem[0]] && elem[1] > 0){
         //console.log(currencyUnit[elem[0]]);
         //console.log(elem[1]);
         change -= currencyUnit[elem[0]];
         //console.log(change);
         elem[1] -= currencyUnit[elem[0]];
         //console.log(elem[1]);
         moneyHolder[1] += currencyUnit[elem[0]] / 100;
         //console.log(moneyHolder);
       }
       if(moneyHolder[1] > 0){
         result.push(moneyHolder);
         //console.log(result);
       }
     }
     if(change > 0){
       return {status: "INSUFFICIENT_FUNDS", change: []};
     }
     return {status: "OPEN", change: result};
   }
}

//Don't forget to divide by 100 in the end

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);