// var n = Math.random();
// n = n * 6;
// n = Math.floor(n);
// console.log(n);
//
//

// var first_name = prompt();
// var second_name = prompt();
//
// var n = Math.random();
// n = Math.floor(n * 100);
// console.log(
//   "The " +
//     first_name +
//     " and " +
//     second_name +
//     " has this much " +
//     n +
//     " % of crush from both side.",
// );
//

// var yourName = prompt("What is your name?");
// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var total = guestList.length;
// var ans = false;
// for (let i = 0; i < total; i++) {
//   if (yourName == guestList[i]) {
//     ans = true;
//   } else {
//     ans = false;
//   }
// }
//
// if (ans == true) {
//   alert("You are Welcome!!!");
// } else {
//   alert("Sorry, Next time!!!");
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 == 0) {
//     console.log(i + "FizzBuzz");
//     continue;
//   }
//   if (i % 3 === 0) {
//     console.log(i + "Fizz");
//     continue;
//   }
//   if (i % 5 === 0) {
//     console.log(i + "Buzz");
//     continue;
//   }
// }

// var i = 99;
//
// while (i > 0) {
//   var one_bottle_less = i - 1;
//   if (one_bottle_less > 0) {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//     console.log(
//       "Take one down and pass it around, " +
//         one_bottle_less +
//         " bottles of beer on the wall.",
//     );
//   } else {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//     console.log(
//       "Take one down and pass it around, " +
//         "no more bottles of beer on the wall.",
//     );
//   }
//
//   i--;
// }
//
// console.log("No more bottles of beer on the wall, no more bottles of beer.");
// console.log(
//   "Go to the store and buy some more, 99 bottles of beer on the wall",
// );

var output = [];
function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  console.log(output);
}

fizzBuzz();
