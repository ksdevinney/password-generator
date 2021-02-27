// Assignment Code
var generateBtn = document.querySelector("#generate");

//put something in the box
/*
const password = document.getElementById("password");
const length = document.getElementById(passLength); */

//options to include in the password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Take a password length and list of characters and return a random password
function generatePassword() {
  
  //prompts for criteria
  var useSpecial = confirm('Use special characters?');

  var useUpper = confirm('Use uppercase letters?');

  var useLower = confirm('Use lowercase letters?');

  var useNumbers = confirm('Use numbers?'); 

  console.log(useSpecial, useUpper, useLower, useNumbers);

  //get a number for password length
  var passLength = prompt('How many characters?','8-128');

  console.log(passLength);

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passLength < 8) {
    alert("Password must be at least 8 characters.");
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passLength > 128) {
    alert("Password must be no more than 128 characters.");
  }

  //alert if passLength isn't a number
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
  }

  //this triggers if one is not selected?

  if (!useUpper && !useLower && !useNumbers && !useSpecial) {
    alert("Please select at least one character type.")
    return "invalid password"
  }
  
  var pickedCharacters = [];

  if (useSpecial) {
    pickedCharacters = pickedCharacters.concat(specialCharacters);
  } 
  if (useUpper) {
    pickedCharacters = pickedCharacters.concat(upperCaseCharacters);
  }
  if (useLower) {
    pickedCharacters = pickedCharacters.concat(lowerCaseCharacters);
  }
  if (useNumbers) {
    pickedCharacters = pickedCharacters.concat(numericCharacters);
  }

  var passwordText = ""

  for (var i = 0; i < passLength; i++) {
    passwordText = passwordText + pickedCharacters[Math.floor(Math.random() * pickedCharacters.length)];
  
  }

  return passwordText;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
