// This is just a test.
// We want to make sure this will be pushed to GitHub.

//INTRODUCTION
//What about PP test.
//console.log("I'm ready!");
//DONE


//DONE
console.log('DAY 02 - 13/01/2022');
console.log('LAB | JS Basic Algorithms');
console.log('Author: João Benício Straehl');
//DONE

//DONE
console.log('----------------------------------------');
//DONE


//INSTRUCTIONS
//Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Joao';

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The hacker's name is ${hacker1} .`);

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Great';

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2} .`);


//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. 
if (hacker1.length > hacker2.length) 
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
//- It seems that the navigator has the longest name, it has XX characters.
else if (hacker1.length < hacker2.length) 
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
//- Wow, you both have equally long names, XX characters!.
else console.log(`Wow, you both got equally long names, ${hacker2.length} characters!`)


//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1UpCase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpCase += hacker1[i].toUpperCase();
  if(i !== hacker1.length-1) 
    //Every letter is going to have a space increased. 
    hacker1UpCase+= " ";
}
console.log(`hacker1InCaps: ${hacker1UpCase}`); 

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navName = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  if (navName.length !== hacker2.length - 1) navName += hacker2[i];
  else navName += hacker2[i].toUpperCase();
}
console.log(`The navigators name in reverse order is: ${navName}`);

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
if (hacker1 < hacker2) console.log('The drivers name goes first.');
//- Yo, the navigator goes first definitely.
else if (hacker1 > hacker2) console.log('The navigators name goes first.');
//- What?! You both have the same name?
else console.log('You have the same initial letter names.');


//BONUS TIME
//BONUS 1:
//Go to lorem ipsum generator and:
//Generate 3 paragraphs. Store the text in a variable type of string.
const loremParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum mauris, quis lacinia risus. Praesent et accumsan arcu, aliquam congue nisl. Nam porta auctor libero eu malesuada. Vestibulum placerat gravida semper. Sed luctus maximus libero, in tristique nulla scelerisque id. Proin urna risus, varius ac consectetur mattis, porta eget lacus. Fusce sodales, turpis vitae porttitor congue, tortor ipsum facilisis sapien, tempus aliquam metus eros id tellus. Pellentesque ac libero in velit vestibulum egestas. Aliquam imperdiet imperdiet sapien a viverra. In non sagittis nibh. Maecenas eu nunc et nisi accumsan egestas vitae nec odio. Quisque eget interdum odio.Nam ornare dictum nunc, quis eleifend odio elementum et. Pellentesque eleifend justo non maximus tristique. Donec dignissim id nulla semper vestibulum. Nam risus orci, finibus at iaculis at, bibendum a augue. Phasellus pellentesque sapien arcu, nec maximus enim placerat et. Donec finibus elit ut nibh suscipit, in semper sapien faucibus. Maecenas efficitur nibh est, sit amet luctus nisi elementum eget. Curabitur euismod lobortis nunc, at sollicitudin sem luctus vitae. Duis vehicula maximus orci, dignissim bibendum nisi egestas ut. Ut a dui nisl. Donec fermentum molestie convallis.Aliquam sit amet magna a nibh dapibus pulvinar et sed purus. Donec consectetur convallis felis eget porta. Vivamus dignissim mauris enim, eu egestas nisl convallis et. Sed aliquet, justo eu vehicula dignissim, metus magna aliquet nulla, sed pharetra tellus elit vel eros. Donec felis magna, rutrum id eros eget, pharetra auctor erat. Nunc volutpat neque a erat ultrices, quis eleifend diam interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce purus arcu, ultrices in tortor ac, vestibulum ultrices sem. Integer tempus nec felis et vestibulum. Etiam tristique lobortis dictum. Sed at dignissim magna, in accumsan erat. Donec non vestibulum nisl. Duis nec tellus id erat iaculis dapibus. Morbi et enim sapien.';

//Make your program count the number of words in the string.
let numberOfWords = 0;
let numberOfEt = 0;

let splittedLoremParagraph = loremParagraph.split(' ');

for (let i=0; i < splittedLoremParagraph.length; i++) {
  if(splittedLoremParagraph[i].includes('\n')) {
    numberOfWords++
  } 
  else if(splittedLoremParagraph[i] === "et" || splittedLoremParagraph[i] === "et.") {
    numberOfEt++;
  }
  numberOfWords++;
 }
console.log('The number of words shown is:', numberOfWords);

//Make your program count the number of times the Latin word et appears.
console.log('The number of et words shown are:', numberOfEt);

//BONUS 2:
//Create a new variable phraseToCheck and have it contain some string //value. Write a code that will check if the value we assigned to //this variable is a Palindrome. Here are some examples of palindromes:
//"A man, a plan, a canal, Panama!"
//"Amor, Roma"
//"race car"
//"stack cats"
//"step on no pets"
//"taco cat"
//"put it up"
//"Was it a car or a cat I saw?" and "No 'x' in Nixon".
let phraseToCheck = "put it up";
phraseToCheck = phraseToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let backwardString = phraseToCheck.split('').reverse().join('');
if (phraseToCheck === backwardString) {
  console.log('The mentioned text IS A palindrome.');
}
else {
  console.log('The mentioned text IS NOT a palindrome');
}