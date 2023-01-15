//1. Navigate to https://codepen.io/sean-noroff/pen/WNoqPZe

//2. Create a new function called half which halves the value of num and displays it to the console in an inner function.


//From codepen
const num = 6;

function double(x) {
  x *= 2;
  function displayResult() {
    console.log(x);
  }
  displayResult();
}

double(num);