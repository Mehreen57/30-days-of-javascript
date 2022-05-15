// Exercise 1
// 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Mehreen";
let lastName = "Fayaz";
let country = "India";
let city = "Srinagar";
let age = 26;
let isMarried = false;

console.log("1:a " + typeof firstName); // string
console.log("1:b " + typeof lastName);  // string
console.log("1:c " + typeof country);   // string
console.log("1:d " + typeof city);      // string
console.log("1:e " + typeof age);       // number
console.log("1:f " + typeof isMarried); // boolean

console.log("2: ----------------------- ")


// 2: Check if type of '10' is equal to 10
console.log('10' === 10); // false - coz type is not same.

console.log("3: ----------------------- ")

// 3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false - not equal, by type they are but by value they are not so it will be false in both "==", "===" cases.

console.log("4: ----------------------- ")

// 4: Write three JavaScript statement which provide truthy value.
// 4: 1
const truthy1 = 1;
console.log(truthy1 == true); // truw - coz positive numbers or -ve number are truthy values

// 4: 2
console.log("" == false); // true - coz empty strings are falsy, so here we are comparing it to false 1.e true.

// 4: 3
console.log("mango".length == "apple".length); // true - coz length is 5 for both values;

// 4: Write three JavaScript statement which provide falsy value.
// 4: 1
console.log(NaN === NaN) // false - according t0 IEEE Nan are never equal, so js follow this spec;

// 4: 2
console.log("3" != 3); // false - coz "3" equals 3, as values are equal.

// 4: 3
console.log(null == ""); // false as "" is empty string and null means nothing. so null cannot be equal to empty string.

// 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("5: --------------------------- ");
console.log(4 > 3)      // true
console.log(4 >= 3)      // true
console.log(4 < 3)       // false
console.log(4 <= 3)      // false
console.log(4 == 4)      // true
console.log(4 === 4)     // true
console.log(4 != 4)      // false
console.log(4 !== 4)     // false
console.log(4 != '4')    // false
console.log(4 == '4')    // true
console.log(4 === '4')   // false

// 5-(xii): Find the length of python and jargon and make a falsy comparison statement.
let python = "python";
let jargon = "jargon"
console.log(python.length != jargon.length); // False - this will give False coz python.length is equal to jargon,length.

// 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("6: ----------------------- ");

console.log(4 > 3 && 10 < 12);                   // true
console.log(4 > 3 && 10 > 12)                    // false
console.log(4 > 3 || 10 < 12)                    // true
console.log(4 > 3 || 10 > 12)                    // true
console.log(!(4 > 3))                            // false
console.log(!(4 < 3))                            // true
console.log(!(false))                            // true
console.log(!(4 > 3 && 10 < 12))                 // false 
console.log(!(4 > 3 && 10 > 12))                 // true 
console.log(!(4 === '4'))                        // true

console.log("6: ------------------ dragon and python task -----------------")
let pythonStr = "python";
let dragon = "dragon";
console.log((python.includes("on") != true && dragon.includes("on") !== true));  // false 

// 7: Use the Date object to do the following activities
console.log("7: ------------------------");
const date = new Date();

// What is the year today?
console.log(date.getFullYear()); // 2022

// What is the month today as a number?
console.log(date.getMonth()); // 04

// What is the date today?
console.log(date.getDate()); // 15

// What is the day today as a number?
console.log(date.getDay()); // 0 - sunday

// What is the hours now?
console.log(date.getHours()); // 16 hours - while writing this line

// What is the minutes now?
console.log(date.getMinutes()); // 25 minutes - while writing this line

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime() / 1000); // gives seconds to now. - coz 1 second = 1000 miliseconds

console.log("Exercises: Level 2  -----------------")

// Exercises: Level 2
// 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function areaTriangle(){
    let base = window.parseInt(prompt("Enter base"));
    let height = window.parseInt(prompt("Enter height"));

    let area = 0.5 * (base * height); // area of traingle is : 1 / 2 * base * height
    console.log(alert(`Area of the traiangle with base: ${base} and height: ${height} is: ${area}`));
}
// remove below comment if you want to display the area of triangle;
// areaTriangle();

// 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

function perimeterTriangle(){
    let sideA = window.parseInt(prompt("Enter value of side one"));
    let sideB = window.parseInt(prompt("Enter value side two"));
    let sideC = window.parseInt(prompt("Enter value side three"));

    let perimeter = sideA + sideB + sideC // 
    console.log(alert(`Perimeter of the traiangle with is: ${perimeter}`));
}
// remove below comment if you want to display the area of triangle;
// perimeterTriangle();

// 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))



 






