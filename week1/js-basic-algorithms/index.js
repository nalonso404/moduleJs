// 1.1 Create a variable `hacker1` with the driver's name.
// 	1.2 Print `"The driver's name is XXXX"`.
//   	1.3 Create a variable `hacker2` with the navigator's name.
//   	1.4 Print `"The navigator's name is YYYY"`.

let hacker1 = 'Noemi';
console.log('The driver name is ' + hacker1 );

let hacker2 = 'Oriol';
console.log('The navigators name is ' + hacker2 );

// ### Iteration 2: Conditionals
//   2.1. Depending on which name [is longer]
// 	  - `The driver has the longest name, it has XX characters.` or 
// 	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
// 	  - `Wow, you both have equally long names, XX characters!`.

if (hacker1.length > hacker2.length){
  const message = `The driver has de longest name, it has ${hacker1.length} characters`
  console.log(message);
} else if(hacker2.length > hacker1.length) {
  const message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  console.log(message)
} else{
  const message =  `Wow, you both have equally long names, ${hacker2.length} characters!`
  console.log(message)
}

// Iteration 3: Loops
//   3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
//   i.e. `"J O H N"`

for(let i=0 ; i< 1; i++){
  const answer = hacker1.toUpperCase().split('').join(' ')
  console.log(answer)
}

// 3.2 Print all the characters of the navigator's name, in reverse order. 

for(let i=0 ; i< 1; i++){
  const answer = hacker2.split('').reverse().join('');
  console.log(answer)
}

// 3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
  const namesHackers= [hacker1 , hacker2];
  const sortedArray = namesHackers.sort();
  console.log(sortedArray);



  //BONUS PALINDROME
  let str1 = 'A man, a plan, a canal, Panama!'
  // let str1 = "Amor, Roma"
  // let str1 = "race car"
  // let str1 = "stack cats"
  // let str1 = "step on no pets"
  // let str1 = "taco cat"
  // let str1 = "put it up"
  // let str1 = "Was it a car or a cat I saw?" and "No 'x' in Nixon".

  let stringToCompare= str1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').toLowerCase();

  if(stringToCompare % 2 === 0){
    let middleChar= stringToCompare.length/2;
    let dividedString1= stringToCompare.slice(0,middleChar);
    let dividedString2=stringToCompare.slice(middleChar,).split("").reverse().join("")
    dividedString1 === dividedString2 ? console.log('Palindrom!') : console.log('not a Palindrom!')
  } else{
    let middlePosition= stringToCompare.length/2;
    let dividedString1= stringToCompare.slice(0,middlePosition)
    let middleCharcter = stringToCompare.slice(middlePosition, middlePosition+1)
    let dividedString2=stringToCompare.slice(middlePosition+1,).split("").reverse().join("")

    dividedString1 === dividedString2 ? console.log('Palindrom!') : console.log('not a Palindrom!')
    
  }