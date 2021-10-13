# Password Generator

This application uses Javascript in order to create a randomized password based on user criteria. Passwords can be any length between 8-128 characters, and can include special characters, numbers, uppercase letters, and lowercase letters.

![preview of password generator](/assets/generator-preview.png)

## To Use

In order to generate a password, the user must select the desired character types and input a number for the password's length. The password will be generated when the "generate password" button is clicked. If the user selects no types, an error will display. Any selected types will be randomized to the desired length, guaranteeing a unique and secure password. If the user requests a password length less than 8, greater than 128, or inputs a non-numerical response, a password will not generate. 

[Deployed to GitHub Pages](https://ksdevinney.github.io/password-generator/)

## Development

This application was developed using HTML, CSS, and JavaScript. While this applciation was originally an assignment for my coding boot camp, I wanted to refactor it to make it more user-friendly (and look nicer!). The original version included pop-ups for each character type, and I have since changed these to be form input instead.