console.log("it is runing....");

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 12;
const n3 = 20;
const n4 = 30;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`This number is unique: ${isUnique}`);
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) 
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//====================================================================================

//Part 1: Math Problems

  //Check if all numbers are divisible by 5. Cache the result in a variable.
  const isdivisible = n1 % 5 && n2 % 5 && n3 % 5 && n4 % 5;
  console.log(isdivisible);

  //Check if the first number is larger than the last.
  const ischeck = n1 > n4;
  console.log(ischeck);

  /** Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.*/

const isfind = n2 - n1;
console.log(isfind);

console.log(isfind * n3);

console.log(isfind%n4)


/*Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.*/
const isover25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
console.log(isover25);

//======================================================================================================

//Part 2: Practical Math

/*Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:

How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?*/

//console.log(`Gallons of fuel you will need for the entire trip is :`$[1500/])

const total_distance = 1500
const budget= 175;
const fuel_cost =3;

let gallon1 = 30;
let gallon2 = 28;
let gallon3 = 23;

let cost55 = gallon1*3;
let cost60 = gallon2*3;
let cost75 = gallon3*3;

//How many gallons of fuel will you need for the entire trip?

const trip1= total_distance/gallon1;
console.log(trip1, `gallons of fuel will you need for trip`);
console.log(`Fuel cost: ${cost55}`);

const trip2= total_distance/gallon2;
console.log(trip2, `gallons of fuel will you need for trip`);
console.log(`Fuel cost: ${cost60}`);

const trip3= total_distance/gallon3;
console.log(trip3, `gallons of fuel will you need for trip`);
console.log(`Fuel cost: ${cost75}`);
 

//Will your budget be enough to cover the fuel expense?

if (cost55 <= budget){
console.log(`The cost for travelling 55 mile/hr is: ${cost55} and budget will cover the cost`);
}
else{
  console.log(`The budget will not cover the cost`);
}

if (cost60 <= budget){
  console.log(`The cost for travelling 60 mile/hr is :${cost60} and budget will cover the cost`);
  }
  else{
    console.log(`The budget will not cover the cost`);
  }

  if (cost75 <= budget){
    console.log(`The cost for travelling 75 mile/hr is :${cost75} and budget will cover the cost`);
    }
    else{
      console.log(`The budget will not cover the cost`);
    }

//How long will the trip take, in hours?

console.log(`Total time for trip1 is:` , [total_distance/55]);
console.log(`Total time for trip2 is:` , [total_distance/60]);
console.log(`Total time for trip3 is:` , [total_distance/75]);


//========================================================================================

// let x = 10;

// let output = (x > 10) ? "Greater" : "Not greater";

// console.log(output);

// if (false) {

//   console.log('True');

// } else {

//   console.log('False');

// }