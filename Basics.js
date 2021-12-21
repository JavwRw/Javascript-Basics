//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//JAVASCRIPT VARIABLES INTRODUCTION
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

console.clear();

var firstNum = 10;

console.log(firstNum);

var secondNum = 15;

console.log(secondNum);

//Ways to write variable Names:

//1. Camel case 
var firstNum;

//2. Pascal case
var FirstNum;

//3. Snake case
var first_num;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//JAVASCRIPT NUMBERS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

var num1 = 10; //integer
var num2 = 10.9; //decimal number

console.log(typeof(num1));
console.log(typeof(num2));

var num3 = 15;
var sum = num3 + num1 + num2;

console.log(sum);

//Subtraction
var diff = num3 - num1;
console.log(diff)

//Multiplication
var mul = num3 * num1;
console.log(mul);

//Division
var div = num3 / num1;
console.log(div);

//note: anything/0 = infinity
//note: anything/"string" = NaN (Not a Number)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//JAVASCRIPT - IN-BUILT NUMBER FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

var num4 = 20.3;

//toString() number as input and returns string

console.log(num1.toString());
console.log(typeof(num1.toString()))

console.log(num4.toString());
console.log(typeof(num4.toString())) // works for Decimal Numbers as well

//parseInt() string numeral as input and returns a integer number

var strNum1 = "10";
var strNum2 = "11.5"

console.log(parseInt(strNum1));
console.log(typeof(parseInt(strNum1)));

console.log(parseInt(strNum2)); //removes ".5" because it returns an INTEGER number
console.log(typeof(parseInt(strNum2)));

//parseFloat() string numeral as input and returns floating number

console.log(parseFloat(strNum2)); //Returns 11.5 as output

//toFixed takes floating number and rounds off to given position

var numFloat = 87.987653;
console.log(numFloat.toFixed()) //rounds up to 88
console.log(numFloat.toFixed(2)) //rounds off to 87.99

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//JAVASCRIPT - STRINGS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

var myFirstString = "I Love JavaScript";
var mySecondString = 'We will learn JavaScript together';

//string contains double quotes

var doubleQuote = "This is my \"JavaScript\" string"
console.log(doubleQuote)

var doubleQuote2 = "This is my 'JavaScript' string"

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//JAVASCRIPT - BUILT-IN STRING FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//PART 1
var str1 = "This is a string for JavaScript string functions"

//length - returns string length as an integer

console.log(str1.length);

//.indexOf - Finds FIRST index of string inside another string
console.log(str1.indexOf('JavaScript'));//CASE SENSITIVE
console.log(str1.indexOf('a'))//Finds the first instance

//.lastIndexOf - Finds LAST index of a string inside another string
console.log(str1.lastIndexOf('a'));

//.slice(start, end)  - Get part of our string
console.log(str1.slice(21,31)); //Does NOT INCLUDE the END position's string

console.log(str1.slice(-10)); //From 10th position from END to last position

console.log(str1.slice(5)) //From 5th position from START to last position

//.substr(startPos, length) - Get sub string function (An ALTERNATE to SLICE)
console.log(str1.substr(0,4));

console.log(str1.substr(21,10));

//note: .substring(start, end) works similar to .slice(start, end)
console.log(str1.substring(21,31));

//PART 2
var str2 = "This is Javascript tutorial"

//toUpperCase() - It converts our string to uppercase characters
console.log(str2.toUpperCase());

//toLowerCase() - Converts string to lowercase characters
console.log(str2.toLowerCase());

// .concat() - Merges two or more strings
var fname = "Adam";
var sname = "Erwee";

console.log(fname.concat(" ",sname));

// .trim() - removes extra spaces
console.log(str2.trim());

// .charAt() - This takes a position as an arg and returns the character at that position
console.log(fname.charAt(1));

// .split - splits string on arg passed
console.log(str2.split(' '));

