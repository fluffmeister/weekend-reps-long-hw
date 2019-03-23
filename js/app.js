console.log('testing')
/*I. Variables & Datatypes
A. Q + A
1. How do we assign a value to a variable?
by using the =
var=0
2. How do we change the value of a variable?
var=1
var=2
3. How do we assign an existing variable to a new variable?
assigning the new variable with the old
newVar= var
4. Remind me, what are `declare`, `assign`, and `define`?
var let const are examples of declaring a variable for the first time(existence)
assign is the action of storing data to the declared variable
define is 

5. What is pseudocoding and why should you do it?
pseduocoding is using comments to better organize your thoughts and list the needed steps to achieve the desired results

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
75-90% planning, and 10-25% actually typing code.

B. Strings


var firstVariable='hello world';
firstVariable=1;
secondVariable=firstVariable;
secondVariable="any string";
console.log(firstVariable);
var yourName ='Dominic';
var saying= 'Hello, my name is ' +yourName;
console.log(saying)

C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(true !== false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a == a !== d);
console.log(48 !== '48');


D. The farm


var animal = cow;

if (animal===cow){
    console.log('Moooo')
}
else{
    console.log('Hey! your not a cow')
}

E. Driver's Ed
var age;
function checkAge(age){
    if(age>=16){
        console.log("Here are the keys")
    }
    else{
        console.log("Sorry, you're too young.")
    }
}
checkAge(20)

II. Loops
A. The basics

//Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i=0;i<=10;i++){
    console.log(i)
}

//Write a loop that will print out all the numbers from 10 up to and including 400.
 for(let i=10;i<=400;i++){
    console.log(i)
 }

//Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for(let i=12;i<4000;i+=3){
    console.log(i)
}
B. Get even
//Print out the even numbers that are within the range of 1 - 100.
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
*/
for(let i=1;i<100;i++){
    if(i%2==0){
    console.log(i+"<-- is an even number")
    }
 }

