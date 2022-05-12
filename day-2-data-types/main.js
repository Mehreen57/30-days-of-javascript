// Exercise: Level 1.
// 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// 2: Print the string on the browser console using console.log().
console.log(`2: ${challenge}`);

// 3: Print the length of the string on the browser console using console.log();
console.log(`3: ${challenge.length}`); // prints length of "challenge string"

// 4: Change all the string characters to capital letters using toUpperCase() method.
console.log(`4: ${challenge.toUpperCase()}`); 

// 5: Change all the string characters to lowercase letters using toLowerCase() method.
console.log(`5: ${challenge.toLowerCase()}`);

// 6: Cut (slice) out the first word of the string using substr() or substring() method.
// using substr() method;
let newSubStr = challenge.substr(0, 2);
console.log(`6: (substr): ${newSubStr}`); // this will extract first word "30" from challenge string;

//using substring on challenge string;
console.log(`6: (substring): ${challenge.substring(0, 2)}`);

// 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(`7: ${challenge.substring(3)}`);

// 8: Check if the string contains a word Script using includes() method.
console.log(`8: ${challenge.includes("Script")}`);

//9: Split the string into an array using split() method.
console.log(`9: ` + challenge.split());

// 10: Split the string 30 Days Of JavaScript at the space using split() method
console.log(`10: ` + challenge.split(' '));

// 11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companyNames = 'Facebook Google Microsoft Apple IBM Oracle Amazon';
console.log(`11: ` + companyNames.split(' ')); 

// 12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(`12: ` + challenge.replace("JavaScript", "Python")); // case sensitive

// 13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`13: ` + challenge.charAt(15)); // "S" is the character at index 15;

// 14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log(`14: ` + challenge.charCodeAt(11)); // 74 is Ascii value for 'J';

// 15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript;
console.log(`15: ` + challenge.indexOf('a')); // first occurance at index 4;

// 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`16: ` + challenge.lastIndexOf('a')); // last occurannce of "a" at index 14;

// 17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction';
let stringIndexOf = 'You cannot end a sentence with because because because is a conjunction';
console.log(`17: ` + stringIndexOf.indexOf("because")); // first occurance at index 31;

// 18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`18: ` + stringIndexOf.lastIndexOf("because")); // last occurance at index 47;

// 19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction';
console.log(`19: ` + stringIndexOf.search("because")); // first occurance at index 31;

// 20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let stringTrim = ' 30 Days Of JavaScript '
console.log(`20: ` + stringTrim.trim());

// 21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true;
console.log(`21: ` + challenge.startsWith("30"));

// 22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`22: ` + challenge.endsWith("JavaScript"));

// 23: Use match() method to find all the a’s in 30 Days Of JavaScript
let regExp = /a/g;
console.log(`23: ` + challenge.match(regExp));

// 24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript';
let firstString = '30 Days of'
console.log(`24: ` + firstString.concat(' JavaScript'));

// 25: Use repeat() method to print 30 Days Of JavaScript 2 times.
console.log(`25: ` + challenge.repeat(2));


// Exercise: Level 2.
// 1: Using console.log() print out the following statement: 'The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another'.
let exerciseQoute  = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(`1: ${exerciseQoute}`);

// 2: sing console.log() print out the following quote by Mother Teresa:
let motherTerasa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(`2: ${motherTerasa}`);

// 3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let stringTypeOf = '10';
let stringTypeOfSec = 10;
console.log("3: " + (typeof(stringTypeOf) == typeof(stringTypeOfSec))); // false - not equal
console.log("3-b: " + (typeof parseInt(stringTypeOf) == typeof(stringTypeOfSec))); // true - equal

// 4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("4 " + (typeof parseFloat('9.8') == typeof(10))); // true

// 5: Check if 'on' is found in both python and jargon
let python = 'python';
let jargon = 'jargon';
console.log("5: " + python.includes('on'));
console.log("5-b: " + jargon.includes('on'));

// 6: I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargonSentence = 'I hope this course is not full of jargon. Check if jargon is in the sentence.';
console.log("6: " + jargonSentence.includes('jargon'));

// 7: Generate a random number between 0 and 100 inclusively.
const rand = Math.floor(Math.random() * 101);
console.log("7: " + rand);

// 8: Generate a random number between 50 and 100 inclusively.
let random = (min, max) =>{
    const difference = max - min;
    const randomNumber = Math.floor((Math.random() * difference) + min); // inclusive min and exclusive max

    return randomNumber;
}

// call function
console.log("8: " + random(50, 100));

// 9: Generate a random number between 0 and 255 inclusively.
const anotherRandom = Math.floor(Math.random() * 256);
console.log("9: " + rand);


// 10: Access the 'JavaScript' string characters using a random number.
let javascriptString =  'JavaScript';
let stringLength = javascriptString.length + 1; // for random() number as '0' is included
let stringRandomIndex = Math.floor(Math.random() * stringLength)
let charPosition = javascriptString[stringRandomIndex];
console.log("10: " + charPosition);

// 11: Use console.log() and escape characters to print the following pattern. 
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

// 11: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let conj = 'You cannot end a sentence with because because because is a conjunction';
console.log("11: " + conj.substr(31, 23));


//  Exercises: Level 3
// 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let loveInstance = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let regularExp = /love/g
let countLoveReg = loveInstance.match(regularExp);
console.log(countLoveReg)
console.log("1: count of love is: " + countLoveReg.length);

// 2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseInstance = 'You cannot end a sentence with because because because is a conjunction.'
let regExpression = /because/g;
let countBecause = becauseInstance.match(regExpression);
console.log(countBecause)
console.log("2: count of because is: " + countBecause.length);

// 3: Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanRegex = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi; 
const cleanSentence = sentence.match(cleanRegex);
console.log(sentence.replace(cleanRegex, ''));

// 4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 let annualString = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
 let annualRegex = /\d+/gi; // extracting one or more digits
 let income = annualString.match(annualRegex);
 let income1 = +income[0]; 
 let income2 = +income[1];
 let income3 = +income[2];
 console.log(`Total income is: ${income1 + income2 + income3}`); // without any loops.

 /* END OF DAY 2 - All questions done */

