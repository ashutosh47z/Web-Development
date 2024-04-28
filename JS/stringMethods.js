//Different Methods of a string

//NOTE -> "STRINGS ARE IMMUTABLE IN JAVASCRIPT"

//Category 1 -> Methods without arguments

//1. <stringName>.trim() method

let str = ('       I am Ashutosh Shukla       ');
let newStr = str.trim();  //str.trim() trims all the whitespaces of a string from front and end of the string
console.log(str);   //prints the string containing whitespaces
console.log(newStr);  //prints the string trimmed and contains no whitespace

//2. <stringName>.toLowerCase() and <stringName>.toUpperCase() Method
let newStr1 = newStr.toLowerCase();  //converts whole string to lowercase
console.log(newStr1);

let newStr2 = newStr.toUpperCase(); //converts whole string to uppercase
console.log(newStr2);

// Most Important-> We can use and chain multiple methods one by one
//For Example- <stringName>.trim().toUpperCase() -> It is known as 'Method Chaining'
// Firstly the whitespaces of the string would be trimmed and lateron converted to the upper case

// Category 2 -> Methods with arguments

// 1. <stringName>.slice(Starting index, Ending Index)
// Note- Starting index is only included in the output and ending index is not included in the output

let newStr3 = newStr.slice(5, 8);  //5th index of the string is included where as 8th index is not included!
console.log(newStr3);

//<stringName>.slice(-num) = <stringName>.slice(length - num)
let str5 = "HelloJavaScript"
console.log(str5.length);
console.log(str5.slice(-2));

//2. <stringName>.replace("word/letter to be replaced","word/letter to be replaced with")
let msg = "I love coding";
console.log(msg.replace("love", "do")); // First Occurence of word 'love' will be replaced with 'do'
console.log(msg.replace("o", "x")); // First occurence of letter 'o' would be replaced with letter 'x'

//3.<stringName>.repeat(n) -> It repeats the string with 'n' number of copies
console.log(msg.repeat(3));

//4. <stringName.indexOf("Word") -> Returns the first occurence of Word/letter in the string
console.log(msg.indexOf("Coding"));  // Returns -1 because "Coding" with 'C' capital is not present in the string
console.log(msg.indexOf("coding"));  // Returns 7