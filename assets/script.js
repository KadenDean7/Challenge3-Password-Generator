// Assignment Code
var generateBtn = document.querySelector("#generate"); 
//var for each of the prompts
var passwordLen = 8;
var includeUpper = true;
var includeLower = true;
var includeNum = true;
var includeSpecChar = true;


// Write password to the #password input
function writePassword() {

  passwordLen = prompt("Choose password length between 8 and 128.");
  while(passwordLen < 8 || passwordLen > 128){
    passwordLen = prompt("ERROR!! Choose password length between 8 and 128.")
  }
  includeUpper = prompt("Include uppercase letters? (yes/no)");
  includeLower = prompt("Include lowercase letters? (yes/no)");
  includeNum = prompt("Include numbers? (yes/no)");
  includeSpecChar = prompt("Inlude special characters? (yes/no)");



  console.log(passwordLen);
  console.log(includeUpper);
  console.log(includeLower);
  console.log(includeNum);
  console.log(includeSpecChar);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
