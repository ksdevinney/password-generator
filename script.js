// Assignment Code
var generateBtn = document.querySelector("#generate");
//special characters array
var specialCharacters = ['!','"','#','$','%','&','+']

var index = Math.floor(Math.random() * specialCharacters.length);

//generate special character from array
var useSpecial = specialCharacters[index];

//index gives an integer
console.log(index)

//lower case

function randomLowerCase () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(randomLowerCase());

//prompts for criteria
/* var charactersInPassword = confirm('Use special characters?');

var useUpper = confirm('Use uppercase letters?');

var useLower = confirm('Use lowercase letters?');

var useNumbers = confirm('Use numbers?');

var totalCharacters = prompt('How many characters?','8-128'); */

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passLength < 8) {
    alert("Password must be at least 8 characters.")
}
// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
​    if (passLength > 128) {
    alert("Password must be no more than 128 characters.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
