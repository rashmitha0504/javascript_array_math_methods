/*Here we are learning the js array methods 

INPUT_1:
const people=["Anish","Bunny","cherry","dhanu","eswar","fhani"]

1.Length of Array 
givees the length of array

console.log(people.length)

2.Convert Array to string
converts the array into the string 

console.log(people.toString())

3.pop and push in array 
push(): Adds one or more elements to the end of an array
pop(): Removes the last element from an array and returns it.

console.log(people.pop())

people.push("Isha")
console.log(people)

4.shift() and unshift()
shift(): Removes the first element from an array and returns it.
unshift(): Adds one or more elements to the beginning of an array.

let peep=people.shift()
console.log(peep)

people.unshift("Zera")
console.log(people)

5.concat 
Combines two or more arrays to create a new array.

const animals=["tiger","elephant"]
console.log(people.concat(animals))

6.Slice()
Returns a portion of an array as a new array.

const slice_people=people.slice(1,3)
console.log(slice_people)

7.splice()
Changes the contents of an array by removing, replacing, or adding elements

people.splice(2,0,"parrot","peacock")
console.log(people)

8.forEach()
Executes a provided function once for each array element.

function everyElement(item){
    console.log(item)
}
people.forEach(everyElement)
*/

/*
INPUT_2: 
const digits=[1,2,3,6,5,6,7,8,9]

9.map 
Creates a new array with the results of calling a provided function on every element in the array.

const doubleDigit=digits.map((each)=>each*2);
console.log(doubleDigit);

10.filter
Creates a new array with all elements that pass a test.

const even_num=digits.filter((each)=>each%2==0);
console.log(even_num)

11.reduce
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
and in condition we use 0 right, we use it because used as the initial value for the accumulator.
The accumulator is a running total of the reduction, and the initial value provides a starting point for this total.

const sum=digits.reduce((accumulator,currentValue)=>accumulator*currentValue,0);
console.log(sum);

12.sort()
Sorts the elements of an array in place and returns the sorted array

console.log(digits.sort())

13.reverse()
Reverses the order of elements in an array.

console.log(digits.reverse())

14.indexOf()
Returns the first index at which a specified element is found in the array.

const indices=digits.indexOf(6)
console.log(indices)

15.lastIndexOf()
Returns the last index at which a specified element is found in the array

const indices=digits.lastIndexOf(6)
console.log(indices)

16.every()
Checks if all elements in an array pass a certain condition.then it returns true otherwise false.

const element=digits.every((each)=>each>5);
console.log(element)

17.some()
Checks if at least one element in an array passes a certain condition.then it returns true.

const element=digits.some((each)=>each>5);
console.log(element)

18.find()
Returns the first element in an array that satisfies a provided testing function

const element=digits.find((each)=>each>5);
console.log(element)
*/

//Thank you 