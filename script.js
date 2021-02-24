// Assignment Code
var generateBtn = document.querySelector("#generate");

//put something in the box
const password = document.getElementById("password");
const length = document.getElementById(passLength);

const randomPass = {
  special: randomSpecial,
  /* these don't exist yet
  lowercase: randomLower,
  uppercase: randomUpper,
  number: randomNumber
  */
};

// Array of special characters to be included in password
var specialCharacters = ["!?@#$%^&*()"];

// Array of numeric characters to be included in password
var numericCharacters = ["0123456789"];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];

// Array of uppercase characters to be included in password
var upperCaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

//functions for generating random characters
var randomSpecial = Math.floor(Math.random() * specialCharacters.length);

function randomLower () {
  Math.floor(Math.random() * lowerCaseCharacters.length);
}

function randomUpper () {
  Math.floor(Math.random() * upperCaseCharacters.length);
}

function randomNumber () {
  Math.floor(Math.random() * numericCharacters.length);
}

console.log(randomSpecial);

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

/* if user inputs something other than a number
if (passLength = NaN) {
  alert("Please enter a number between 8-128");
}
*/

//this triggers if any is not selected?
/*
if (useUpper === false && useLower === false && useNumbers === false && useSpecial === false) {
  alert("Please select at least one character type.")
}
*/

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/

//this goes in the box
password.innerText = generatePassword(
  useSpecial,
  useUpper,
  useLower,
  useNumbers,
  passLength
);

function generatePassword(special, upper, lower, number, length) {
  let generatedPassword = "";
  const useCharacters = special + upper + lower + number
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
