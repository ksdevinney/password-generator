// Assignment Code
const generateBtn = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const capitalsEl = document.getElementById("capital-letters");
const specialsEl = document.getElementById("special-characters");
const lowerEl = document.getElementById("lowercase-letters");
const numberEl = document.getElementById("numbers");
let passwordText = document.getElementById("password");

//options to include in the password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
const lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const useSpecial = specialsEl.checked;
  const useUpper = capitalsEl.checked;
  const useLower = lowerEl.checked;
  const useNumbers = numberEl.checked;
  const passLength = +lengthEl.value;

  // console.log(useSpecial, useUpper, useLower, useNumbers, passLength);
  passwordText.innerText = generatePassword(useSpecial, useUpper, useLower, useNumbers, passLength)
});

// Take a password length and list of characters and return a random password
function generatePassword(useSpecial, useUpper, useLower, useNumbers, passLength) {
  
  //prompts for criteria
  // let useSpecial = confirm('Use special characters?');

  // let useUpper = confirm('Use uppercase letters?');

  // let useLower = confirm('Use lowercase letters?');

  // let useNumbers = confirm('Use numbers?'); 

  //get a number for password length
  // let passLength = prompt('How many characters?','8-128');

  // let useSpecial = document.querySelector("#special-characters");

  // console.log(useSpecial, useUpper, useLower, useNumbers);
  // console.log(passLength);

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passLength < 8) {
    alert("Please enter a number larger than 8");
  } else if (passLength > 128) {
    alert("Please enter a number less than 128")
  } else if (isNaN(passLength) === true) {
    alert("Password length must be a number");
  };

  if (!useUpper && !useLower && !useNumbers && !useSpecial) {
    alert("Please select at least one character type");
    return "invalid password";
  }
  
  let pickedCharacters = [];

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

  let passwordText = ""

  for (let i = 0; i < passLength; i++) {
    if (passLength < 8 || passLength > 128 || isNaN(passLength) === true) {
      return ":("
    } else {
      passwordText = passwordText + pickedCharacters[Math.floor(Math.random() * pickedCharacters.length)];
    }
  }

  return passwordText;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  passwordText.value = password;

}
