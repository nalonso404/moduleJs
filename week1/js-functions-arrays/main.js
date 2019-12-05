// Iteration 1

let maxOfTwoNumbers = (num1, num2) => num1 > num2 ? num1 : num2

// Iteration 2 

const words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
];

let findLongestWord = array => {
    let longestWord = "";
    array.forEach(function (word) {
        word.length > longestWord.length ? longestWord = word : null
    })
    return longestWord
}

findLongestWord(words)

// Iteration 3
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sumArray = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

sumArray(numbers)

//Iteration 4

let averageNumbers = (numbers) => sumArray(numbers) / numbers.length

averageNumbers(numbers)

//Array of strings

let wordsAv = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];

let averageWordLength = wordsAv => {
    let sumWords = 0;
    for (let i = 0; i < wordsAv.length; i++) {
        sumWords += wordsAv[i].length;
    }
    return sumWords/wordsAv.length
}

averageWordLength(wordsAv)

//Unique Array

const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ]
  let uniquifyArray = wordsUnique => {
    let uniqueArray = [];
    for (let i=0; i< wordsUnique.length; i++){
        uniqueArray.indexOf(wordsUnique[i])=== -1 ? uniqueArray.push(wordsUnique[i]) : null
    } return uniqueArray
}

uniquifyArray(wordsUnique)

//Iteration 6 Finding Elements

const array = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ]
  const doesWordExist = (array, word) => array.includes(word) ? true : false
  doesWordExist(array,'false')

  //Counting repetition

  const arrayOfWords = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ]

  const howManyTimes = (arrayOfWords,word) => {
    let counter = 0;
    for (let i=0; i<arrayOfWords.length; i++){
      arrayOfWords[i].includes(word) ? counter++ : word
    }
    return counter
}
howManyTimes(arrayOfWords,'truth')