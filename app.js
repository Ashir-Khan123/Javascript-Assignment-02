                    // chapter # 06-08

// Question # 01

// var num = 5;

// num = num++ 

// console.log("The value of num is : " + num)

// num = ++num

// console.log("The value of num is : " + num)

// num = num-- 

// console.log("The value of num is : " + num)

// num = --num

// console.log("The value of num is : " + num)

// Question # 02

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// --a // 1

// --a - --b // 1 - 0 

// --a - --b + ++b // 1 - 0 + 1

// --a - --b + ++b + b-- // 1 - 0 + 1 + 1 = 3

// console.log("The value of a is : 1")
// console.log("The value of b is : 2")
// console.log("The result is : " + result)

// Question # 03

// var Name = prompt("Enter Your name : ")

// console.log("Hello " + Name)

// Question # 04

// var num = prompt("Enter your table : ")

// if(num.length == 0){
//     var num2 = 5;
//     for(var i = 1 ; i <= 10 ; i++){
//         console.log(num2 + " x " + i + " = " + num2*i)
//     }
// }
// else if(num >= 1){
//     for(var i = 1 ; i <= 10 ; i++){
//         console.log(num + " x " + i + " = " + num*i)
//     }
// }
// else{
//     console.log("Incorrect input")
// }

// Question # 05

// var sub1 = "AI";
// var sub2 = "PF";
// var sub3 = "DBMS";

// var obtain_marks_1 = prompt("Enter your AI marks : ")
// console.log("Your " + sub1 + " marks : " + obtain_marks_1)

// var obtain_marks_2 = prompt("Enter your PF marks : ")
// console.log("Your " + sub2 + " marks : " + obtain_marks_2)

// var obtain_marks_3 = prompt("Enter your DBMS marks : ")
// console.log("Your " + sub3 + " marks : " + obtain_marks_3)

// var obtain_marks = (+obtain_marks_1) + (+obtain_marks_2) + (+obtain_marks_3);
// console.log("Obtain marks : " + obtain_marks)

// var total_marks = 100 + 100 + 100;
// console.log("Total marks : " + total_marks)

// var percentage = (obtain_marks * 100) / total_marks
// console.log("Percentage : " + percentage + "%")

                        // Chapter # 09-11
// Question # 01

// var city_name = prompt("Enter your city name : ")

// if(city_name == 'karachi' || city_name == 'peshawar' || city_name == 'lahore' || city_name == 'islamabad' || city_name == 'multan' || city_name == 'quetta'){
//     console.log("Welcome to " + city_name)
// }
// else{
//     console.log("try again")
// }

// Question # 02

// var gender = prompt("Enter your gender : ")

// if(gender == "male"){
//     console.log("Good Morning Sir")
// }
// else if(gender == "female"){
//     console.log("Good Morning Ma'am")
// }
// else{
//     console.log("Incorrect gender")
// }

// Question # 03

// var signal_color = prompt("Enter your color of road traffic signal : \n red , yellow , green")

// if(signal_color == "red"){
//     console.log("Must Stop")
// }
// else if(signal_color == "yellow"){
//     console.log("Ready to move")
// }
// else if(signal_color == "green"){
//     console.log("Now you can move")
// }
// else{
//     console.log("Incorrect color")
// }

// Question # 04

// var fuel = prompt("Enter your remaining fuel : \n (In litres)")

// if(fuel <= 0.25){
//     console.log("Please refill the fuel in your car")
// }
// else if(fuel > 0.25){
//     console.log("Fuel is enough")
// }
// else{
//     console.log("Incorrect Input")
// }

// Question # 05

// (a) (if condition is true)

//  var a = 4; 
// if (++a === 5){                 // 5 === 5 condition is true                                   
//     alert("given condition for variable a is true");
// }
// else{
//     console.log("Given condition is false")
// }

// (b) (if condition is false)

// var b = 82;
// // if (b++ === 83){             // 82 === 83 condition is false
// // alert("given condition for variable b is true");
// // }
// // else{
// //     alert("Given condition is false")
// // }

// (c) (if condition 2 & 4 is true)

// var c = 12;
// if (c++ === 13){            // 12 === 13 condition is false
// alert("condition 1 is true"); 
// }
// if (c === 13){              // 13 === 13 condition is true
// alert("condition 2 is true");
// }
// if (++c < 14){              // 14 < 14 condition is false
// alert("condition 3 is true");
// }
// if(c === 14){               // 14 === 14 conition is true
// alert("condition 4 is true");
// }

// (d) (conditioin is true)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// (e) (condition is true)

// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }

// (f) (condition is true)

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Question # 06

// var sub_1 = prompt("Enter your Maths obtain marks : ")
// var t_marks_1 = prompt("Enter your Maths total marks : ")

// var sub_2 = prompt("Enter your Physics obtain marks : ")
// var t_marks_2 = prompt("Enter your Physics total marks : ")

// var sub_3 = prompt("Enter your Chemistry obtain marks : ")
// var t_marks_3 = prompt("Enter your Chemistry total marks : ")

// var Obtain_marks = (+sub_1) + (+sub_2) + (+sub_3)
// console.log("Obtain marks : " + Obtain_marks)

// var Total_marks = (+t_marks_1) + (+t_marks_2) + (+t_marks_3)
// console.log("Total marks : " + Total_marks)

// var Percentage = Obtain_marks * 100 / Total_marks

// console.log("Percentage : " + Percentage)

// if(Percentage >= 80){
//     console.log("A-One grade")
//     console.log("Remarks : Excellent")
// }
// else if(Percentage >= 70){
//     console.log("A grade")
//     console.log("Remarks : Good")
// }
// else if(Percentage >= 60){
//     console.log("B grade")
//     console.log("Remarks : You need to improve")
// }
// else{
//     console.log("You have failed")
//     console.log("Remarks : Sorry")
// }

// Question # 07

// var secret_num = 6
// var user_guess = prompt("Guess the number(1-10) : ")

// if(user_guess == secret_num){
//     alert("Bingo! Correct answer")
// }
// else if(user_guess == ++secret_num){
//     alert("Very close to the correct answer")
// }
// else{
//     alert("Incorrect input")
// }

// Question # 08

// var num = prompt("Enter your number : ")

// if(num % 3 == 0){
//     console.log("The number is divisible by 3")
// }
// else{
//     console.log("The number is not divisible by 3")
// }

// Question # 09

// var num = prompt("Enter your number : ")

// if(num % 2 == 0){
//     console.log("The given number is even ")
// }
// else{
//     console.log("The given number is odd")
// }

// Question # 10

// var tem = prompt("Enter tempreture : ")

// if(tem > 40){
//     console.log("It is too hot outside")
// }
// else if(tem > 30){
//     console.log("The Weather is Normal")
// }
// else if(tem > 20){
//     console.log("Weather is cool")
// }
// else{
//     console.log("OMG! Today's weather is so Cool")
// }

// var first_num = prompt("Enter first number : ")
// var second_num = prompt("Enter second number : ")
// var operation = prompt("Enter operation( + , - , * , / , % ) : ")

// if (operation == "+"){
//     console.log((+first_num) + (+second_num))
// }
// else if(operation == "-"){
//     console.log(first_num - second_num)
// }
// else if(operation == "*"){
//     console.log(first_num * second_num)
// }
// else if(operation == "/"){
//     console.log(first_num / second_num)
// }
// else if(operation == "%"){
//     console.log(first_num % second_num)
// }
// else{
//     console.log("Incorrect input")
// }

                            // Chapter # 12-13

// Question # 01

// var char = prompt("Enter a character")

// if(char.length == 1){
//     if(char == char.toUpperCase()){
//         console.log(char + " is an Uppercase letter ")
//     }
//     else if(char == char.toLowerCase()){
//         console.log(char + " is an lowercase letter ")
//     }
//     else{
//         console.log(char + " is not an alphabetic character ")
//     }
// }
// else{
//     console.log("Please enter a single digit character")
// }

// Question # 02

// var num1 = prompt("Enter first number")
// var num2 = prompt("Enter second number")

// if(num1 > num2){
//     console.log("The larger number is : " + num1)
// }
// else if(num2 > num1){
//     console.log("The larger number is : " + num2)
// }
// else{
//     console.log(num1 + " and " + num2 + " are equal ")
// }

// Question # 03

// var num = prompt("Enter a number")

// if(num.length == 2){
//     if(num > 0){
//         console.log("The given number is positive")
//     }
//     else if(num == 0){
//         console.log("The given number is zero")
//     }
//     else if(num < 0){
//         console.log("The given number is negative")
//     }   
//     else{
//         console.log("incorrect! enter number")
//     }
// }
// else{
//     console.log("Please enter a single digit number")
// }

// Question # 04

// var char = prompt("Enter a character")

// if(char.length == 1){
//     if(char.toLowerCase() == "a" || char.toLowerCase() == "e" || char.toLowerCase() == "i" || char.toLowerCase() == "o" || char.toLowerCase() == "u"){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }
// }
// else{
//     console.log("Please enter a single digit character")
// }

// Question # 05

// var store_pass = "pakistan"

// var user_pass = prompt("Enter password")

// if(user_pass == ""){
//     console.log("please enter your password")
// }
// else{
//     if(user_pass == store_pass){
//         console.log("Correct passwrd!")
//     }
//     else{
//         console.log("Incorrect password")
//     }
// }

// Question # 06

// var greeting;
// var hour = 13;

// if (hour < 18) { 
//     greeting = "Good day";
// }
// else{ 
//     greeting = "Good evening"; 
// }
// console.log(greeting)

// Question # 07

// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):")

// if(time >= 0 && time <= 2400 ){
//     if(time >= 600 && time < 1200 ){
//         console.log("Good morning!")
//     }
//     else if(time >= 1200 && time < 1700){
//         console.log("Good Afternoon!")
//     }
//     else if(time >= 1700 && time < 2000){
//         console.log("Good Evening!")
//     }
//     else(
//         console.log("Good Night!")
//     )
// }
// else{
//     console.log("Invalid time format! Please enter time between 0000 and 2400.")
// }

                        // Chapter # 14-16

// Question # 01

// var studnentNames = [];

// Question # 02

// var studnentNames = new Array()

// Question # 03

// var strArr = ["html" , "css"  , "bootstrap" , "js" , "react"]

// Question # 04

// var numArr = [50 , 100 , -4 , 12 , 100]

// Questio # 05

// var boolArr = [true ,false , false , true , true , false]

// Question # 06

// var mixArr = ["font end" , "500" , true , "development" , -90 , false]

// Question # 07

// var qualification = ['SSC', 'HSC', 'BCS' , 'BS', 'BCOM' , 'MS' , 'M. Phil' , 'PhD']

// console.log("   Qualification In Pakistan\n\n" , qualification)

// Question # 08

// var std_name = ["Ahmed" , "Asim" , "sameer"]

// var score = [390 , 430 , 490]

// var total = 500

// for(var i = 0 ; i < std_name.length ; i++){
//     var per = score[i] * 100 / total
//     console.log("score of " + std_name[i] + " is " + score[i] + " \n percentage " + per)
// }

// Question # 09

// var color_names = []
// console.log(color_names)

// // (a)
// var newcolor = prompt("What colour you wants to add to the beginning of array?")
// color_names.unshift(newcolor)
// console.log(color_names)

// // (b)
// var newcolor1 = prompt("What colour you wants to add to the end of array?")
// color_names.push(newcolor1)
// console.log(color_names)

// // (c)
// var newcolor2 = prompt("Enter colour you wants to add to the beginning of array?")
// var newcolor3 = prompt("Enter colour you wants to add to the beginning of array?")
// color_names.unshift(newcolor2 , newcolor3)
// console.log(color_names)

// // (d)
// color_names.shift()
// console.log(color_names)

// // (e)
// color_names.pop()
// console.log(color_names)

// // (f)
// var index = prompt("Which index you want to add color?")
// var newColor = prompt("What color you wants to add?")
// color_names.splice(index, 0 ,newColor)
// console.log(color_names)

// // (g)
// var index = prompt("Which index you want to delete color?")
// var counter = prompt("How many colors you want to delete?")
// color_names.splice(index, counter)
// console.log(color_names)

// Question # 10

// var std_score = [320 , 480 , 230  , 120]

// var arrSort = std_score.sort()

// console.log(arrSort)

// Question # 11

// var cities = ["karachi" , "lahore" , "kashmir" , "multan" , "sukkur"]

// console.log(cities)

// var select_cities = cities.slice(1 , 4)

// console.log(select_cities)

// Question # 12

// array join method is not teach us

// Questin # 13

// var arr = ["mouse" , "printer" , "cpu" , "usb"]

// console.log(arr)

// var result = arr.shift()
// console.log(result)

// var result = arr.shift()
// console.log(result)

// var result = arr.shift()
// console.log(result)

// var result = arr.shift()
// console.log(result)

// Question # 14

// var arr = ["mouse" , "printer" , "cpu" , "usb"]

// console.log(arr)

// var result = arr.pop()
// console.log(result)

// var result = arr.pop()
// console.log(result)

// var result = arr.pop()
// console.log(result)

// var result = arr.pop()
// console.log(result)

// Question # 15

// it is not teach us

                        // Chapter # 17-20

// Question # 01

// var multi_array = [[]]

// // Question # 02

// var matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
//   ];
// console.log(matrix)

// Question # 03

// for(var i = 1 ; i <= 10 ; i++){
//     console.log(i)
// }

// Question # 04

// var num = prompt("Enter your table")
// var length = prompt("Enter length")

// for(var i = 1 ; i <= length ; i++){
//     console.log(num + " x " + i + " = " + num * i)
// }

// Question # 05

// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']

// for(var i = 0 ; i < fruits.length ; i++){
//     console.log(fruits[i])
// }

// Question # 06

// (a)
// for(var i = 1 ; i <= 15 ; i++){
//     console.log(i)
// }

// // (b)
// for(var i = 10 ; i >= 1 ; i--){
//     console.log(i)
// } 

// // (c)
// for(var i = 0 ; i <= 20 ; i = i + 2){
//     console.log(i)
// }

// // (d)
// for(var i = 1 ; i <= 19 ; i = i + 2){
//     console.log(i)
// }

// //(e)
// for(var i = 2 ; i <= 20 ; i = i + 2){
//     console.log(i+"k")
// }

// Question # 07 

// var Arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
// var user$choice = prompt('WELCOME TO DELICIOUS BAKERY! \n What do you want to order?')

// var found = false;

// for(var i = 0 ; i < Arr.length ; i++){
//         if(Arr[i] == user$choice){
//             found = true
//             break;
//         }
// }

// if(found){
//     console.log(user$choice + " is available")
// }
// else{
//     console.log("We are sorry! " + user$choice + " is not available")
// }

    // Question # 08

    // var arr = [24 , 53 , 78 , 91 , 12]

// var max = 0

// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i] > max)
//         max = arr[i]
// }
// console.log("The highest number is :" , max)

// Question # 09

// var arr = [24 , 53 , 78 , 91 , 12]

// var min = arr[0]

// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[i] < min)
//         min = arr[i]
// }
// console.log("The lowest number is :" , min)

// Question # 10

// for(var i = 1 ; i <= 20 ; i++){
//     console.log(5*i)
// }
