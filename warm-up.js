'use strict';

// part 1
let arr = ['1','2','3','4','5','6','7','8','9','10'];

let forLoop = (arr) => {
    for(let number in arr){
        console.log(number);
    }
}
let whileLoop = (arr) => {
    let i = 0;
    while(i < arr.length){
        console.log(arr[i]);
        i++;
    }
}

function mapp(arr, cb){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
      newArr.push(cb(arr[i], i));
    }
    return newArr;
  }
  function filter(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(cb(arr[i], i)){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  function reduce(arr, cb, startVal){
    for(let i = 0; i < arr.length; i++){
      startingValue = cb(arr[i], i, startVal);
    }
    return startVal;
  }


// part2
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['odie', ...people, 'garfield'];
const newStuff = {...stuff, cars:[ ...stuff.cars,'subaru']};
let newState = {...people, ...stuff};

