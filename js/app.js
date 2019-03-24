//console.log('testing')
/*
I. Variables & Datatypes
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
*/
/*
B. Strings


var firstVariable='hello world';
firstVariable=1;
secondVariable=firstVariable;
secondVariable="any string";
console.log(firstVariable);
var yourName ='Dominic';
var saying= 'Hello, my name is ' +yourName;
console.log(saying)
*/
/*
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
*/
/*
D. The farm


var animal = cow;

if (animal===cow){
    console.log('Moooo')
}
else{
    console.log('Hey! your not a cow')
}
*/
/*
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
*/

/*
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
*/

/*
B. Get even
//Print out the even numbers that are within the range of 1 - 100.
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

for(let i=1;i<100;i++){
    if(i%2==0){
    console.log(i+"<-- is an even number")
    }
 }
*/
/*
 C. Give me Five
 For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
 

for(let i=1;i<=100;i++){
    if(i%5==0||i%3==0){
        if(i%5==0){
        console.log("I found a "+ i+ " High five!")
        }  
    if(i%3==0){
        console.log("I found a "+ i+ " Three's a Crowd")
        }
    }
    
 }

D. Savings account
*/
/*
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
const bank_account=[];
for(let i=0;i<=10;i++){
    bank_account.push(i)
}
const sum = bank_account.reduce((accumlator,currentValue)=>{
    return accumlator+currentValue;
},0);
console.log(sum)

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
const bank_account=[];
for(let i=0;i<=100;i++){
    bank_account.push(i*2)
}
const sum = bank_account.reduce((accumlator,currentValue)=>{
    return accumlator+currentValue;
},0);
console.log(sum)
*/

/*
E. multiples of 3 and 5

const multiples=[];
for(let i=0;i<1000;i++){
    if(i%3==0||i%5==0){
    multiples.push(i)
    }
}
const sum = multiples.reduce((accumlator,currentValue)=>{
    return accumlator+currentValue;
},0);
console.log(sum)
*/

/*
III. Arrays & Control flow

A. Talk about it:
//What are the things in an array called?
Elements
//Do Arrays guarantee those things will be in order?
the elements will stay the same unless a function like sort() or reverse() is used to change the contents within
//What real-life thing could you model with an array?
multiplication table,seating arragement
*/

/*

B. Easy Does It

//Create an array that contains three quotes and store it in a variable called quotes.
const quotes=['I','am','coding']
C. Accessing elements
const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
console.log(randomThings[0])
//Change the value of "Hello" to "World".
randomThings[2]="world"
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)
*/

/*
D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?
ourClass[2]
//Change the value of "Github" to "Octocat"
ourClass[4]='Octocat'
//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")
console.log(ourClass)
*/

/*
E. Mix It Up


const myArray = [5, 10, 500, 20]
//Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Egon','Slimer')

//Remove the 5 from the beginning of the array.
myArray.splice(0,1)
console.log(myArray)

//Add the string "Bob Marley" to the beginning of the array.

myArray.splice(0,0,'Bob Marlley')
console.log(myArray)
//Remove the string of your choise from the end of the array.
myArray.splice(2,1)
console.log(myArray)

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
newArray=myArray.reverse(myArray)
console.log(newArray)
*/

/*
/*
F. Biggie Smalls
Create a variable that contains an integer.
//Write an if ... else statement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big number if the number is greater than or equal to 100.
var num=300;
if(num>=100){
    console.log('Big number')
}
else{
    console.log('Little Number')
}
G. Monkey in the Middle

var num=5;
if(num>5){
    console.log('Big number')
}
if(num<5){
    console.log('Little Number')
}
else{
    console.log('Monkey')
}
*/

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps'
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      'grey button-up',
      'dark grey button-up',
      'light blue button-up',
      'blue button-up'
    ],
    [
      // These are Thom's pants
      'grey jeans',
      'jeans',
      'PJs'
    ],
    [
      // Thom's accessories
      'wool mittens',
      'wool scarf',
      'raybans'
    ]
  ];
/*
H. What's in Your Closet?
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5,0,"raybans")
//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
console.log(kristynsCloset)
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
let outfit=[];
outfit.push(thomsCloset[0][0])
console.log(outfit)
console.log(thomsCloset)

//In the same way, access one item from Thom's pants array.
outfit.push(thomsCloset[1][0])
//Access one item from Thom's accessories array.
outfit.push(thomsCloset[2][2])
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a "+ outfit[0]+', '+outfit[1]+' and '+outfit[2])
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2]="Footie Pajamas"
console.log(thomsCloset[1][2])

IV. Functions
A. printGreeting
var name;
function printGreeting(name){
    console.log(name)
}

console.log(printGreeting('Slimer'));

B. printCool
let name = 0;
function printCool(name){
    console.log(name+' is cool');
}
printCool('Captain Reynolds');
*/
/*
C. calculateCube
function calculateCube(num){
    console.log(Math.pow(num,3))
}
calculateCube(5)

D. isVowel
function isVowel(test){
    let str=test.toUpperCase();
    console.log(str)
    if(str==='A'||str==='E'||str==='I'||str==='O'||str==='U'){
        console.log(test+' is a vowel')
    }
    if(str==='Y'){
        console.log('And sometimes ' + str)
    }
    else{
        console.log(test +' is a constant')
    }
}
isVowel('y');

E. getTwoLengths

function getTwoengths(str1,str2){

    let all=[];
    all.push(str1.length);
    all.push(str2.length);
    console.log(all)
    
}
getTwoLengths('Hank', 'Hippopopalous');
*/
/*
F. getMultipleLengths
function getMultipleLengths(arr){
    newArr=[];
    for(i=0;i<arr.length;i++){
        newArr.push(arr[i].length)
        }
    console.log(newArr)
}
getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']);
*/
/*
G. maxOfThree
function maxOfThree(num1,num2,num3){
    if (num1>=num2&& num1>=num3){
        console.log(num1+' is the largest')
    } 
    else{
        if(num2>=num3){
            console.log(num2+' is the largest');
        }
        else{
            console.log(num3+' is the largest');
        }
    }

}
maxOfThree(1,1,4);

H. printLongestWord
*/
/*
 // console.log(words.length)
function printLongestWord(words){
    let n=words[0];
    let first=[];
    //shift thru array
    for(let i=0;i<words.length;i++){
        if(n.length<=words[i].length){
          if(n.length!==words[i].length){
            n=words[i];
          }
          else{  
            first=words[i]
          }
        }
    }
    if(n.length===first.length){
        console.log(first)
    }
    else{
        console.log(n)
    }
}
printLongestWord([
    'BoJack',
    'Princess',
    'Diane',
    'a',
    'Max',
    'Peanutbutter',
    'big',
    'peanutbuttar'
  ])
*/
/*
I. transmogrify
function transmogrify(num1,num2,exp){
     console.log(Math.pow((num1*num2),exp))
  }
 transmogrify(5, 3, 2)
 
J. reverseWordOrderV2
 */
  