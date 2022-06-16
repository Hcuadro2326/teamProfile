// Assignment code here
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', ';', '/', '~', '?', '<', '>'];
var lowerCassArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCassArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to have? (8-128)"));
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Must type a number 8-128");
      return false;
    }

    if (confirm("Is it ok to use lowercase letters?")) {
      choiceArr = choiceArr.concat(lowerCassArr);
      console.log("lowerCassArr")
    } 

    if (confirm("Is it ok to use uppercase letters?")) {
      choiceArr = choiceArr.concat(upperCassArr);
      console.log("upperCassArr")
    }

    if (confirm("Is it ok to use numbers?")) {
      choiceArr = choiceArr.concat(numberArr);
      console.log("numberArr")
    }

    if (confirm("Is it ok to use special characters?")) {
      choiceArr = choiceArr.concat(specialCharArr);
      console.log("specialCharArr")
    }
    return true;
}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  } else {
    passwordText.value = "";

  }
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  for(var i = 0; i< characterLength; i ++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;
}

