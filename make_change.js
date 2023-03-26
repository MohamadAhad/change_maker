function processEntry() { //
  const userInput = document.getElementById('user-input').value;
  const num = parseInt(userInput);

  if (num >= 0 && num <= 99 && !isNaN(num)) {
    makeChange(num);
  } else {
    alert('Please enter a number between 0 and 99.');
  }
}

// Function for making change
function makeChange(num) {
  const quarters = Math.floor(num / 25);//this calculates quarters
  num %= 25;
  const dimes = Math.floor(num / 10);//this calculates dimes
  num %= 10;
  const nickels = Math.floor(num / 5);//this calculates nickels
  num %= 5;
  const pennies = num;

  document.getElementById('quarters').value = quarters;
  document.getElementById('dimes').value = dimes;
  document.getElementById('nickels').value = nickels;
  document.getElementById('pennies').value = pennies;
}

// Event handler for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const makeChangeButton = document.getElementById('make-change-button');
  makeChangeButton.addEventListener('click', processEntry);
});
