//1. Using CodePen write a program which determines whether a number is divisble by 5

//2. If the number is divisible by 5, the message "x is divisible by 5" should be display, with 'x' being replaced by the number.

//3. Conversely, if the number is NOT divisible by 5, the message "x is NOT divisible by 5" should be display, with 'x' being replaced by the number.


divisibleByFive = number => {
  if(number % 5 === 0){
    console.log(`${number} is divisible by 5`);
  }
  else{
    console.log(`${number} is NOT divisible by 5`);
  }
}

divisibleByFive(10);

divisibleByFive(9);

divisibleByFive(25);