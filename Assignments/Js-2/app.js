// // Task 1:
// var celsius = parseInt(prompt("Please enter a temperature in Celsius."))
// if(celsius >= 40) {
//     console.log("extremely hot")
// }
// else {
//     if(celsius >= 30) {
//         console.log("Hot")
//     }
//     else if (celsius >= 20) {
//         console.log("Warm")
//     }
//     else if (celsius >= 10) {
//         console.log("Cool")
//     }
//     else {
//         console.log("Cold")
//     }
// }


// // Task 2:
// var month = parseInt(prompt("Please Mention a month"))
// switch(month) {
//     case 1: {
//         console.log("January has 31 days")
//     }
//     break
//     case 2: {
//         console.log("Febuary has 28 days")
//     }
//     break
//     case 3: {
//         console.log("March has 31 days")
//     }
//     break
//     case 4: {
//         console.log("April has 30 days")
//     }
//     break
//     case 5: {
//         console.log("May has 31 days")
//     }
//     break
//     case 6: {
//         console.log("Jun has 30 days")
//     }
//     break
//     case 7: {
//         console.log("July has 31 days")
//     }
//     break
//     case 8: {
//         console.log("August has 31 days")
//     }
//     break
//     case 9: {
//         console.log("September has 30 days")
//     }
//     break
//     case 10: {
//         console.log("October has 31 days")
//     }
//     break
//     case 11: {
//         console.log("November has 30 days")
//     }
//     break
//     case 12: {
//         console.log("December has 31 days")
//     }
// }


// // Task 3:
// for(var i = 1; i <= 20; i++){
//     console.log(i)
// }


// // Task 4:
// var n = parseInt(prompt("Please Enter any number"));
// while(n >= 1) {
//     if (n % 3 === 0) {  // divisible by 3
//         console.log(n)  
//     }
//     n--  // count down
// }


// // Task 5:
// do {
//     var number = +prompt("Please enter any number")
// }
// while (number < 50) {
// console.log(number)
// }


// // Task 6:
// for (var i = 2; i <= 10; i = i * 2) {
//     for (var j = 1; j <= i; j++) {
//         console.log(j + " inner")
//     }
//     console.log(i + " Outer")
// }


// // Task 7:
// for (var i = 1; i <= 15; i++){
//     if(i % 3 == 0){
//         console.log("Fizz")
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz")
//     }
//     else (console.log(i))
// }


// // Task 8:
// var score = +prompt("please enter your score")
// var bonus = 20
// console.log("Initial " + score)
// score = score + bonus
// console.log("Updated " + score)


// // Task 9:
// var name = prompt("please enter your name")
// name += prompt("please enter your last name")
// console.log(name)


// // Task 10:

// var price = +prompt("please enter the price")
// console.log("Original " + price)
// price += - price * 0.10
// console.log("Updated " + price)


// // Task 11:
// var items = [""]
// for(var i = 1; i <= 5; i++) {
//     var item = prompt("item name")
//     items.push(item)
//     console.log(items[i])
// }


// // Task 12:
// var numbers = [5, 10, 15, 20, 25]
// numbers[1] = 50
// numbers[4] = 100
// console.log(numbers[1], numbers[4])


// // Task 13:
// var numbers1 = [1, 2, 3, 4, 5]
// for (var i = 0; i <= 4; i++){
//     numbers1[i] = (i + 1) * 2
//     console.log(numbers1[i]) // 2, 4, 6, 8, 10
// }


// // Task 14:
// var arr = [1, 2, 3]
// var arr1 = [4, 5, 6]
// for(var i = 0; i <= 2; i++) {
//     arr.push(arr1[i])
// }
// console.log(arr)


// // Task 15:
// var nums = [10, 15, 20, 25, 30]
// for(var i = 0; i <= 4; i++){
//     if(nums[i] % 10 == 0){
//         nums[i] = nums[i] + 5
//     }
// }
// console.log(nums) // [15, 15, 25, 25, 35]