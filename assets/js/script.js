// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  length: null,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
};

// Generate Password
function generatePassword() {
  // Get Password Critria from User
  for (const criteria in passwordCriteria) {
    console.log(`${criteria} : ${passwordCriteria[criteria]}`);
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
