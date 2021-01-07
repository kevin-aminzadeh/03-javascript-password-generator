// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {
  // Local Variables
  let passwordCriteria = {
    length: null,
    lowercase: null,
    uppercase: null,
    numeric: null,
    special: null,
  };

  let charset = {
    // ASCII Character Code Ranges For Each Type of Character
    lowercase: [97, 122],
    uppercase: [65, 90],
    numeric: [48, 57],
    special: {
      0: [32, 47],
      1: [58, 64],
      2: [91, 96],
      3: [123, 126],
    },
  };

  let pass = "";

  // Get Password Critria from User
  for (const criteria in passwordCriteria) {
    if (criteria == "length") {
      passwordCriteria[criteria] = prompt(
        `Please enter the desired password ${criteria}: (Must be between 8 to 128 characters)`
      );

      // Basic Input Validation - Check If password length is within the acceptable range, if not, return error.
      if (passwordCriteria[criteria] < 8 || passwordCriteria[criteria] > 128) {
        alert(
          "Please enter a valid password length between 8 to 128 characters."
        );
        console.error(
          "Invalid password length. Password must be between 8 to 128 characters."
        );
        return;
      }
    } else {
      passwordCriteria[criteria] = confirm(
        `Should the password include ${criteria} characters?`
      );
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
