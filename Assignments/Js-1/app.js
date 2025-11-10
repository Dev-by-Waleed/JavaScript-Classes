// // Task - 1
alert("Welcome, Waleed")


// // Task - 2
var name = "Waleed"
console.log("Your name is " + name )


// // Task - 3
var two = 2
var five = 5
console.log(two + five)


// // Task - 4
// legal variable names:
var id = "it's an ID "
var firstName  = "Waleed"
var numValue   = " for number value "
var alertText = "It's an alert Text "
var price  = "for price"
console.log(id + firstName + numValue + alertText + price)
// perfectly legal

// illegal variable names:
// var console = "it's a console"
// var var = "it's a variable"
// var const = "it's a const"
// var if = "it's a if"
// var let = "it's a let"
console.log("i won't show this in console since they'll mess up the whole script")
//they are illegal, meaning they'll not work even if you want to, they have their own reserved use


// // Task - 5
var ten = 10
var seven = 7
var result = ten + seven - ten * seven / ten
console.log(result)


// // Task - 6-A
var num = parseInt(prompt("Write your number for even and odd"))
if ( num % 2 == 0) {
    alert("even")}
else alert("odd")

// // Task - 6-B
// post-increment
var ten = 10
console.log(ten++)
console.log(ten++)
// Explanation: post increment returns the original value in first console and then if we use the same variable in the second console it'll return with added value

// pre-increment
var secondTen = 10
console.log(++secondTen)
console.log(++secondTen)
// Explanation: Pre increment does the calculation aswell as return the value in first console

// post-decrement
var three = 3
console.log(three--)
console.log(three--)
// Explanation: works same one but its post 'decrement'

// pre-decrement
var secondThree = 3
console.log(--secondThree)
console.log(--secondThree)
// Explanation: works same one but its pre 'decrement'


// // Task - 7
var firstName = "Waleed"
var secondName = "Ahmad"
var spacebar = " "
alert("The full name is" + spacebar + firstName + spacebar + secondName)


// // Task - 8
var favFood = prompt("What's your favourite Food")
alert("got it, its " + favFood)


// // Task - 9
var num = parseInt(prompt("please write a number to see if it's bigger than 1o"));
if (num > 10) {alert("true")}
else if (num == 10) alert("same number, please choose another");
else alert ("false")


// // Task - 10
var five=5
if (five == "5") {
    alert("right, with == can ignore type of a number")
}
else alert("false")
// Explanation: compares a number regardless of their type

var five=5
if (five === "5") {
    alert("false")
}
else alert("yeah, with === won't ignore the type of a number")
// Explanation: only compares a number of the same type


// //  Task - 11
var grade = parseInt(prompt("Please Write Your Percentage"))
if (grade >= 80) {alert("congrats you've passed the test, your grade is A")}
else if (grade >= 60) {alert("Good Work Your Grade is B")}
else if (grade >= 40) {alert("Your Grade is C")}
else alert ("fail")

// // Task - 12 - Bonus
alert("Think of two numbers and an Operator (e.g. +, -, *, /) and make sure to use correct ones in correct text-boxes"
    + "\n" + "Are You Ready?")
var num1 = parseInt(prompt("Please Write a Number"))
var opt = prompt("Please Write an Operator")
var num2 = parseInt(prompt("Please Write One More Number"))

if (opt == "+") {
    alert(num1 + num2)
}
else if (opt == "-") {
    alert(num1 - num2)
}
else if (opt == "*") {
    alert(num1 * num2)
}
else if (opt == "/") {
    alert(num1 / num2)
}
else alert("Please do it correctly.")
