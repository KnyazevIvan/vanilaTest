

function fizzbuzz(number) {

  if ((number % 3 === 0) & (number % 5 === 0)) {
    return ('fizzbuzz')
  }

  else if (number % 3 === 0) {
    return ('fizz')
  }
  else if (number % 5 === 0) {
    return ('buzz ')
  }

}

function anagram(firstText, secondText) {

  return firstText.toLowerCase() === secondText.toLowerCase()
}

let element = document.getElementById("element");
function setRandomColor() {
  function rundomColor() {
    let arr = '#'
    for (let i = 0; i < 6; i++) {
      arr += Math.floor((Math.random() * 16)).toString(16)
    }
    return arr;
  }
  element.style.background = rundomColor()
}

element.onmousedown = function (e) {
  console.log(e)
  element.style.position = 'absolute';

  moveAt(event.pageX, event.pageY);
  document.body.appendChild(element);
  function moveAt(pageX, pageY) {
    element.style.cursor = 'grabbing'
    element.style.left = pageX - element.offsetWidth / 2 + 'px';
    element.style.top = pageY - element.offsetHeight / 2 + 'px';
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  element.onmouseup = function () {
    element.style.cursor = 'pointer'
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  }
}

element.ondragstart = function () {
  return false;
};

setInterval(() => {
  setRandomColor()
}, 100);




// let array = [{ width: 200, id: 32 }, { width: 50, id: 20 }, {width:10, id:666}]
function banner() {

  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i].width
  }

  let result = Math.floor(Math.random() * sum);
  let s = 0;

  for (i = 0; i < array.length; i++) {
    s = s + array[i].width;

    if ((s - result) >= 0) {

      return array[i].id;

    }
  }


}

function fibonacci(num) {

  let result = [0, 1]

  if (num < 2) {
    return num;
  }

  for (i = 2; i <= num; i++) {

    result.push(result[i - 2] + result[i - 1])
  }
  return (result[num])
}
function bobeCounter(text) {
  let counter = 0;
  for (const symbol of text) {
    symbol.toLowerCase() === 'b' && counter++
  }
  return counter
}

function range(start, end, step) {
  rangeArray = []

  if (step < 0) {

    while (start >= end) {
      rangeArray.push(start)
      start = start + step;
    }
  }

  else {
    while (start <= end) {
      rangeArray.push(start)
      if (step) {
        start = start + step;
      }
      else {
        step++;
      }

    }
  }

  return rangeArray;
}
function sum(array) {
  let sum = 0;
  for (const el of array) {
    sum = sum + el;
  }
  return sum;
}

function reverseArray(array) {
  reversedArray = []
  for (i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray;
}

function reverseArrayInPlace() {
  arrayValue = reverseArray(arrayValue)
}
// let arrays = [[1, 2, 3], [4, 5], [6]];

function reducerExample() {
  arrays = arrays.reduce(function (a, b) {
    return a.concat(b)
  });
}

function ArraySeq(array) {
  newArray = [];
  for (i = array[0]; i <= array[1]; i++) {
    newArray.push(i)
  }
  this.array = newArray;
}
function RangeSeq(from, to) {
  newArray = []
  while (from <= to) {
    newArray.push(from)
    from++;
  }
  this.array = newArray;
}
function logFive(obj) {
  for (i = 0; i < obj.array.length; i++)
    if (i < 5)
      console.log(obj.array[i])
    else break;

}
function markFinder(text) {
  array = []
  for (i = 0; i < text.length; i++) {
    if ((text.charAt(i) === "'") & ((text.charAt(i - 1) == ' ') || (text.charAt(i + 1) == ' ') || (text.charAt(i - 1) == '') || (text.charAt(i + 1) == ''))) {
      array.push('"')
    }

    else { array.push(text.charAt(i)) }

  }
  return array.join('')
}

const month = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  name(number) {
    return (this.months[number])
  },
  number(monthName) {
    for (i = 0; i < 12; i++) {
      if (this.months[i] === monthName) {
        return i;
      }
    }
  }

}
function evenFun(firstNumber, secondNumber) {

  if ((firstNumber % 2 === 0) & (secondNumber % 2 === 0)) {
    return firstNumber * secondNumber;
  }
  if ((firstNumber % 2 !== 0) & (secondNumber % 2 !== 0)) {
    return firstNumber + secondNumber;
  }
  else if (firstNumber % 2 !== 0) {
    return firstNumber;
  }
  else if (secondNumber % 2 !== 0) {
    return secondNumber;
  }

}

function createMatrix(x, y) {
  let mainArray = [];
  let subArray = [];
  for (i = 0; i < x; i++) {
    subArray = [];
    for (m = 0; m < y; m++) {
      subArray.push(Math.floor(Math.random() * 100))
    }
    mainArray.push(subArray);
  }
  return mainArray;
}

function sumMatrix(firstArray, secondArray) {
  let mainArray = [];
  let subArray = [];
  for (i = 0; i < firstArray.length; i++) {
    subArray = []
    for (m = 0; m < firstArray[0].length; m++) {
      subArray.push(firstArray[i][m] + secondArray[i][m])
    }
    mainArray.push(subArray)
  }
  return mainArray;
}

function ninePairfinder(array) {
  let counter = 0;
  let pairs = 0
  for (i = 1; i < array.length; i++) {

    let prevLastNumber = array[i - 1].toString().charAt(array[i - 1].toString().length - 1);
    let currentLastNumber = array[i].toString().charAt(array[i].toString().length - 1);
    if (currentLastNumber === '9' & prevLastNumber === '9') {
      counter++;
    }
    else {
      console.log(Math.floor((counter + 1) / 2))
      pairs = pairs + Math.floor((counter + 1) / 2)
      counter = 0;
    }
    if (i == array.length - 1) {
      pairs = pairs + Math.floor((counter + 1) / 2)
    }


  } return pairs;
}
function sumFive(array) {
  let counter = 0;
  for (const number of array) {
    if (number % 5 !== 0) {
      counter = counter + number;
    }

  }
  return counter;
}

function maxFree(array) {
  let counter = 0;
  for (const number of array) {
    if (number % 3 !== 0 & counter < number) {

      counter = number;
    }
  }
  return counter;
}

function minZero(array) {

  let counter = '';

  for (const number of array) {

    let lastSymbol = number.toString().charAt(number.toString().length - 1);

    if (lastSymbol === '0' & (number < counter || counter === '')) {
      counter = number;
    }
  }

  return array.map(el => {
    if (el.toString().charAt(el.toString().length - 1) === '0') {
      return counter;
    }
    else return el;

  })

}

class Worker {

  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getSalary() {
    return this._rate * this._days
  }

}

class Validator {
  isEmail(text) {
    let array = text.split('')
    let result = false;
    if (array.includes('.') & array.includes('@')) {
      for (let i = 1; i < array.length; i++) {
        if (array[i] !== ' ' && array[i - 1] === '@') {
          result = true;
          break;
        }
      }
    }
    return result;
  }
  isDomain(text) {
    let array = text.split('')
    let result = false;
    if (!array.includes('@')) {
      for (let i = 1; i < array.length; i++) {
        if (array[i] !== ' ' && array[i - 1] === '.') {
          result = true;
          break;
        }
      }
     
    }
    return result;
  }
  isDate(date){
    return !isNaN(Date.parse(date));
  }
  isPhone(number){
    return !isNaN(Number(number))&&number.length==12
  }
}
class User {
  constructor(name,surname){
    this.name= name;
    this.surname = surname;
  }
  getFullName(){
    return this.name+' '+this.surname;
  }
}
class Student extends User{
  constructor(name,surname,year){
    super(name,surname);
    this.year = year;

  }
  getCourse(){
    let course = 2020-this.year+1;
    if(course<5){
      return course
    } 
    else return 'окончил'
  }
}

