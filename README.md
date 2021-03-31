# Javascript Password Generator

<p align="center">
  <img src="./assets/img/03-javascript-homework-demo.png" alt="Javascript Pseudo-Random Password Generator">
</p>

> <h2 align="center"><a  href="https://kevin-aminzadeh.github.io/javascript-password-generator/">Live Demo</a></h2>

## Table of Contents

- [Overview](#overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Approach](#approach)
- [License](#license)

## Overview

This application is a relatively simple pseudo-random password generator built with Javascript; It features user configurable password length and character type options, as well as basic input validation and error handling.

The purpose behind the project is primarily to reinforce basic Javascript knowledge and concepts such as DOM manipulation and the utilization of functions and objects.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Approach

The following features and design decisions were made to achieve the requirements stated in the acceptance criteria section above:

### **Input Capture**

In order to meet the requirement for capturing password criteria from the user, a `passwordCriteria` object is used in the `generatePassword()` function to store the user's input/response to the various dialog boxes they are presented with.

When the user chooses to include a particular character type, all its possible values are added to the `allowedChars` property of the `passwordCriteria` object as a single string.

### **Input Validation & Error Handling**

During the input capture process, some basic validation logic is used to ensure that:

- The password length entered by the user is within the allowed range (8-128 characters)
- At least one character type is selected

In the case that either of these validation conditions have not been met, an error is thrown and the password generation process is halted.

### **Pseudo-Random Password Generation**

The application uses a fairly simple process to generate the pseudo-random password. Using the `passLength` parameter captured from the user's input as the limit, the application iterates through a simple loop where Javascript's `Math.random()` method is used to select a random character from `passwordCriteria`'s `allowedChars` property.

This character is then concatenated to the end of the password until the desired password length has been reached, at which point the `generatePassword()` function returns the generated password.

## License

This project is licensed under the terms of the MIT license.
