// Assignment Code
var generateBtn = document.querySelector("#generate"); 
//var for each of the prompts
var passwordLen = 8;
var includeUpper = true;
var includeLower = true;
var includeNum = true;
var includeSpecChar = true;
var userChoices;
//specifics of passwords in string
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {

  function passwordPrompts(){
    //prompts to get password generation specifics
    passwordLen = prompt("Choose password length between 8 and 128.");
    //while loop for invalid password length number
    while(passwordLen < 8 || passwordLen > 128){
      passwordLen = prompt("ERROR!! Choose password length between 8 and 128.")
    }
    includeUpper = confirm("Include uppercase letters? (yes/no)");
    includeLower = confirm("Include lowercase letters? (yes/no)");
    includeNum = confirm("Include numbers? (yes/no)");
    includeSpecChar = confirm("Inlude special characters? (yes/no)");
    }

    passwordPrompts();

    console.log(includeLower);
    console.log(includeNum);
    console.log(includeSpecChar);
    console.log(includeUpper);

  //password generation logic
  function generatePassword(){
    if (includeUpper && includeLower && includeNum && includeSpecChar ){
      //takes user choice and combines all the arrays into one
      userChoices = upperCaseLetter.concat(lowerCaseLetter, passNumbers,specialChar);

    }else if(includeUpper && includeNum && includeSpecChar ){
      userChoices = upperCaseLetter.concat(passNumbers, specialChar);

    }else if (includeLower && includeNum && includeSpecChar){
      userChoices = lowerCaseLetter.concat(passNumbers, specialChar);

    }else if(includeUpper && includeLower && includeNum){
      userChoices = upperCaseLetter.concat(lowerCaseLetter, passNumbers);

    }else if(includeUpper && includeLower && includeSpecChar){
      userChoices = upperCaseLetter.concat(lowerCaseLetter, specialChar);

    }else if (includeUpper && includeNum ){
      userChoices = upperCaseLetter.concat(passNumbers);

    }else if (includeUpper && includeSpecChar ){
      userChoices = upperCaseLetter.concat(specialChar);

    }else if(includeLower && includeSpecChar){
      userChoices = lowerCaseLetter.concat(specialChar);

    } else if(includeLower && includeNum){
      userChoices = lowerCaseLetter.concat(passNumbers);

    } else if(includeNum && includeSpecChar ){
      userChoices = passNumbers.concat(specialChar);

    }else if(includeUpper && includeLower){
      userChoices = upperCaseLetter.concat(lowerCaseLetter);
    
    }else if(includeUpper ){
      userChoices = upperCaseLetter;

    }else if(includeLower ){
      userChoices = lowerCaseLetter;

    }else if(includeNum ){
      userChoices = passNumbers;

    }else if(includeSpecChar){
      userChoices = specialChar;

    }

    //password randomization

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
