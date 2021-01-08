// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {
  // Local variables
  const charset = {
    0: {
      name: "lowercase",
      value: "abcdefghijklmnopqrstuvwxyz",
    },
    1: {
      name: "uppercase",
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    2: {
      name: "numeric",
      value: "1234567890",
    },
    3: {
      name: "special",
      value: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    },
  };

  let passwordCriteria = {
    passLength: null,
    allowedChars: "",
  };

  let pass = "";

  // Get Password Length from User
  passwordCriteria.passLength = prompt(
    `Please enter the desired password length: (Must be between 8 to 128 characters)`
  );

  // IF the chosen password length is inside the allowed range then proceed to capturing user's desired character types for password
  if (passwordCriteria.passLength >= 8 && passwordCriteria.passLength <= 128) {
    for (const charType in charset) {
      if (
        confirm(
          `Should the password include ${charset[charType].name} characters?`
        )
      ) {
        passwordCriteria.allowedChars = passwordCriteria.allowedChars.concat(
          charset[charType].value
        );
      }
    }
  }
  // Else reset the value of passLength, alert the user, throw an error and return
  else {
    passwordCriteria.passLength = null;
    alert("Please enter a valid password length between 8 to 128 characters.");
    console.error(
      "Error: Invalid password length. Password must be between 8 to 128 characters."
    );
    return;
  }

  // Begin password generation only if at least one character type has been selected
  if (passwordCriteria.allowedChars !== "") {
    // Generate pseudorandom password based on user's selected criteria
    for (let i = 0; i < passwordCriteria.passLength; i++) {
      pass += passwordCriteria.allowedChars.charAt(
        Math.floor(Math.random() * passwordCriteria.allowedChars.length)
      );
    }
  }
  // Else throw an error, alert the user and return
  else {
    alert("Please select at least one character type.");
    console.error(
      "Error: No character type selected! You must select at least one character type."
    );
    return "Error: No character type selected! You must select at least one character type.";
  }

  return pass;
}

// Write password to the #password input
function writePassword() {
  // Clear Console errors from previous failed attempts
  console.clear();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
