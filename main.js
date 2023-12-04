// 1- Write a program that allow to user enter number then printit

//  var num =Number(window.prompt("Enter a number"));
// document.getElementById("demo").innerHTML = num;





// 2- Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

// var num =Number(window.prompt("Enter a number"));
// if (num % 3 == 0 && num % 4 == 0){
//     document.getElementById("demo").innerHTML = "yes";

// }
// else{
//     document.getElementById("demo").innerHTML = "no";
// }





// 3- Write a program that allows the user to insert 2 integers then print the max

// var num1 =Number(window.prompt("Enter a number"));
// var num2 =Number(window.prompt("Enter a another number"));

// if (num1 > num2){
//     document.getElementById("demo").innerHTML = "max number is " + num1
// }
// else{
//     document.getElementById("demo").innerHTML = "max number is " + num2
// }





// 4- Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive.

// var num =Number(window.prompt("Enter a number"));

// if (num < 0){
//     document.getElementById("demo").innerHTML = "negative";
// }
// else{
//     document.getElementById("demo").innerHTML = "postive";

// }





// 5- Write a program that take 3 integers from user then print the max element
// and the min element.

// var num1 =Number(window.prompt("Enter the st number"));
// var num2 =Number(window.prompt("Enter the nd number"));
// var num3 =Number(window.prompt("Enter the rd number"));
// if(num1 > num2 && num1>num3 && num2 > num3){
//     document.getElementById("demo").innerHTML = "max number is "+ num1;
//     document.getElementById("demo1").innerHTML = "min number is "+ num3;
// }
// if(num1 > num2 && num1>num3 && num3 > num2){
//     document.getElementById("demo").innerHTML = "max number is "+ num1;
//     document.getElementById("demo1").innerHTML = "min number is "+ num2;
// }
// else if(num2 > num1 && num2 > num3 && num1 > num3){
//     document.getElementById("demo").innerHTML = "max number is "+ num2;
//     document.getElementById("demo1").innerHTML = "min number is "+ num3;
// }
// else if(num2 > num1 && num2 > num3 && num3 > num1){
//     document.getElementById("demo").innerHTML = "max number is "+ num2;
//     document.getElementById("demo1").innerHTML = "min number is "+ num1;
// }
// else if(num3 > num1 && num3 > num2 && num1 > num2){
//     document.getElementById("demo").innerHTML = "max number is "+ num3;
//     document.getElementById("demo1").innerHTML = "min number is "+ num2;
// }
// else if(num3 > num1 && num3 > num2 && num2 > num1){
//     document.getElementById("demo").innerHTML = "max number is "+ num3;
//     document.getElementById("demo1").innerHTML = "min number is "+ num1;
// }





// 6- Write a program that allows the user to insert integer number then
// check If a number is oven or odd

// var num = Number(window.prompt("Enter a Number"))

// if (num % 2 == 0){
//     document.getElementById("demo").innerHTML="the number " + num + " " +"is even"
// }
// else{
//     document.getElementById("demo").innerHTML="the number " + num + " " +"is odd"
// }





// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// var x = window.prompt("enter a char")

// if(x === "a" || x === "e" || x === "i" || x === "o" || x === "u"){
//     document.getElementById("demo").innerHTML = "vowel"
// }
// else{
//     document.getElementById("demo").innerHTML = "consonant"
// }






// 8- Write aprogram that allows user to insert integer then print all numbers between 1 to
// that’s number

// var num = Number (window.prompt("enter a number"))
// for (i =1 ; i<=num ; i ++ ){
//     console.log(i)
// }



// 9- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// num =Number(window.prompt("enter a number"))
// for(i = 1; i<= 12 ; i ++){
//     console.log(i*num);
// }





// 10-Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
// between 1 to this number

// var num =Number(window.prompt("write a number"));

// for(i = 1; i<=num; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }






// 11- Write a program that take two integers then print the power

var num1 = Number(window.prompt("enter a number"))
var num2 = Number(window.prompt("enter another number"))
var reselt = 1;

for(i = 1; i<=num2; i++){
    reselt *=num1;
    document.getElementById("demo").innerHTML = reselt;
}






// 12- Write a program to enter marks of five subjects and calculate total, average and
// percentage.

// var num1 = Number(window.prompt("enter a subj1"));
// var num2 = Number(window.prompt("enter a subj2"));
// var num3 = Number(window.prompt("enter a subj3"));
// var num4 = Number(window.prompt("enter a subj4"));
// var num5 = Number(window.prompt("enter a subj5"));
// var sum = num1+num2+num3+num4+num5;
// console.log("total number = "+ sum);
// console.log("average number = "+ sum/5);
// console.log("persentage number = "+ (sum*100)/500);





// 13-Write a program to input month number and print number of days in that
// month.

// var mon = Number(window.prompt("enter the month"));
// if(mon == 1 || mon == 3 || mon == 5 ||mon == 7 ||mon == 8 || mon ==10 || mon ==12 ){
//     for(i = 1; i <=31; i++){
//         console.log(i);
//     }
// }
// else if(mon == 2){
//     for(i = 1; i <=28; i++){
//         console.log(i);
//     } 
// }
// else{
//     for(i = 1; i <=30; i++){
//         console.log(i);
//     }
// }








// 14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade

// var num1 = Number(window.prompt("enter a Physics"));
// var num2 = Number(window.prompt("enter a Chemistry"));
// var num3 = Number(window.prompt("enter a Biology"));
// var num4 = Number(window.prompt("enter a Mathematics"));
// var num5 = Number(window.prompt("enter a Computer"));
// var sum = num1+num2+num3+num4+num5
// var percentage = sum*100/500
// document.getElementById("demo").innerHTML="percentage "+ percentage + " %";
// if(percentage>=90){
//     document.getElementById("demo1").innerHTML="grade A"
// }
// else if(percentage>=80){
//     document.getElementById("demo1").innerHTML="grade B"
// }
// else if(percentage>=70){
//     document.getElementById("demo1").innerHTML="grade C"
// }
// else if(percentage>=40){
//     document.getElementById("demo1").innerHTML="grade D"
// }
// else{
//     document.getElementById("demo1").innerHTML="grade F"
// }





// 14- Write a program to print total number of days in month

// var month = Number(window.prompt("Enter the month"));

// switch (month){
//     case(1):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(3):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(5):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(7):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(8):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(10):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(12):
//     for(i=1; i<=31; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(2):
//     for(i=1; i<=28; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(4):
//     for(i=1; i<=30; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(6):
//     for(i=1; i<=30; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(9):
//     for(i=1; i<=30; i++)
//     {
//         console.log(i)
//     }
//     break;
//     case(11):
//     for(i=1; i<=30; i++)
//     {
//         console.log(i)
//     }
//     break;
//     default:
//     console.log("not a vaild month")
// }






// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter an alphabet");
// switch (char){
//     case("a"):{
//         console.log("vowel")
//     }
//     break;
//     case("e"):{
//         console.log("vowel")
//     }
//     break;
//     case("i"):{
//         console.log("vowel")
//     }
//     break;
//     case("o"):{
//         console.log("vowel")
//     }
//     break;
//     case("u"):{
//         console.log("vowel")
//     }
//     break;
//     default:
//         console.log("consonant")
// }





// 17 - Write a program to find maximum between two numbers

// var num1 = Number(window.prompt("Enter a number"));
// var num2 = Number(window.prompt("Enter another number"));

// switch(true){
//     case num1 > num2:
//         console.log("max number is " + num1)
//     break;
//     case num2 > num1:
//         console.log("max number is " + num2)
//     break;
//     default:
//         console.log("tow numbers are equal")
// }






// 18- Write a program to check whether a number is even or odd

// var num = Number(window.prompt("Enter a number"));
// switch(num % 2){
//     case 0:
//     console.log("even")
//     break;
//     case 1:
//     console.log("odd")
//     break;
//     default:
//         console.log("not a vaild number")

// }






// 19- Write a program to check whether a number is positive or negative or zero

// var num = Number(window.prompt("Enter a number"))
// switch (true) {
//     case num > 0:
//         console.log("the number is positive")
//         break;
//         case num < 0:
//             console.log("the number is negative")
//             break;
//             case num === 0:
//                 console.log("zero")
//                 break;
//     default:
//         console.log("not a number")
//         break;
// }







// 20-Write a program to create Simple Calculator

// var num1 = Number(window.prompt("Enter a number"));
// var num2 = Number(window.prompt("Enter another number"));
// var char = window.prompt("Enter +, - , * , /");

// switch(char){
//     case ("+"):
//         console.log(num1+num2);
//         break;
//     case("-"):
//         console.log(num1-num2);
//     break;
//     case("*"):
//         console.log(num1*num2);
//     break;
//     case("/"):
//         console.log(num1/num2);
//     break;
//     default:
//         console.log("not vaild")
// }


