/*
Pseudocode
1. Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
2. Assign three variables for each number in the combination: 10 - 40 - 39
3. Combine the message with the combination variables
4. Create an alert for the user to display the message with combination
*/

// uses addition to display first number in combination
const first = 8 + 2;
// uses multiplication to display first number in combination
const second = 10 * 4;
// uses subtraction to display first number in combination
const third = 40 - 1;

// combines the message with combination
const message =
  "You have You have received this message because you have been chosen to open an important vault. Here is the secret combination:" +
  first +
  "-" +
  second +
  "-" +
  third;

// displays message to user
alert(message);
