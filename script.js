// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var characters = "!@#$%^&*()_+=".split("");
var numbers = "1234567890".split("");
var minLength = 8;
var maxLength = 128;
var passwordOptions = [];

function generatePassword() {
  var finalPass = [];
  var passwordLen;
  while (true) {
    passwordLen = prompt(
      "How long would you like your password? (Enter a number between " +
        minLength +
        " and " +
        maxLength +
        ")"
    );

    if (passwordLen === null || passwordLen.trim() === "") {
      return ""; // This makes sure user can cancel. Kept running into an issue where i would it cancel and it would alert me
    }
    // To make sure user choose right amout of characters in their password and will keep asking until they do
    if (
      parseInt(passwordLen) >= minLength &&
      parseInt(passwordLen) <= maxLength
    ) {
      break;
    } else {
      alert(
        "Password length must be between 8 and 128 characters. Please try again."
      );
    }
  }
  var hasUpper, hasLower, hasNum, hasC;

  // Making sure at least one is
  while (true) {
    hasUpper = confirm("Do you want uppercase in your password?");
    hasLower = confirm("Do you want lowercase in your password?");
    hasNum = confirm("Do you want numbers in your password?");
    hasC = confirm("Do you want characters in your password?");

    if (hasUpper || hasLower || hasNum || hasC) {
      // Exit the loop if at least one criteria was selected
      break;
    } else {
      alert("You must choose at least one criteria. Please try again.");
    }
  }

  if (hasUpper === true) {
    passwordOptions = passwordOptions.concat(upperCase);
  }
  if (hasLower === true) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }
  if (hasNum === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (hasC === true) {
    passwordOptions = passwordOptions.concat(characters);
  }
  if (passwordLen.length >= minLength && passwordLen <= maxLength) {
    return true;
  }

  for (let index = 0; index < passwordLen; index++) {
    var random = Math.floor(Math.random() * passwordOptions.length);

    finalPass.push(passwordOptions[random]);
  }
  console.log(finalPass);
  return finalPass.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(passwordOptions);
