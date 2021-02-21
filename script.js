// Assignment Code
var generateBtn = document.querySelector("#generate");
//special characters array
var specialCharacters = ['!','"','#','$','%','&','+']

var index = Math.floor(Math.random() * specialCharacters.length);

//generate special character from array
var useSpecial = specialCharacters[index];

//index gives an integer
console.log(index)

//prompts for criteria
var charactersInPassword = confirm('Use special characters?');
  /*
  if {
    
  }
}*/

var useUpper = confirm('Use uppercase letters?');

var useLower = confirm('Use lowercase letters?');

var useNumbers = confirm('Use numbers?');

var totalCharacters = prompt('How many characters?','8-128');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
