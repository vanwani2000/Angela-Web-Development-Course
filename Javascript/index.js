// var message = prompt("Write the blog")
// var lengthOfMessage = message.length;
// var remainingMessage = 140;
// alert("The Message length is: " + lengthOfMessage + ". The remaining messages are: " + (remainingMessage - lengthOfMessage) + ". The message is: " + message.slice(0, 141));

// One line of code will be
// alert(prompt("Write the message").slice(0, 140));
//

// Exercise at  Changing casing in text.
// var name = prompt("What is your name?");
// alert(
//   "Hello, " +
//     (name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()),
// );
//

// var dogage = prompt("What is your dogage?");
// var humanage = (dogage - 2) * 4 + 21;
// alert("The humanage is: " + humanage);

// function getMilk() {
//   console.log("LeaveHouse");
//   console.log("moveRight");
//   console.log("moveUP");
//   console.log("buyMilk");
//   console.log("moveLeft");
// }
// // Calling the code whenever we want, instead of repeating the commands again and again.
// getMilk();
//

// function getMilk(bottles) {
//   var cost = bottles * 1.5;
//   console.log("The price of " + bottles + " bottles is: " + cost);
// }
// getMilk(2);

// function noOfBottles(totalMoney, costOfMilk) {
//   var noOfBottlesWithMoney = totalMoney / costOfMilk;
//
//   console.log(
//     "The no. of bottles from " +
//       totalMoney +
//       " will be " +
//       Math.floor(noOfBottlesWithMoney),
//   );
// }
// noOfBottles(10, 1.5);

function noOfBottles(totalMoney, costOfMilk) {
  var noOfBottlesWithMoney = totalMoney / costOfMilk;

  return noOfBottlesWithMoney;
}
var totalMoney = prompt();
var noOfBottlesWithMoney = noOfBottles(totalMoney, 1.5);
console.log(
  "The no. of bottles from " +
    totalMoney +
    " will be " +
    Math.floor(noOfBottlesWithMoney),
);
