// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x){
  return function(){
    return x*x;
  }}

// let fareDoubler = createFareMultiplier();
// fareDoubler = x => x*2;

const doubler = createFareMultiplier();
const fareDoubler = doubler => doubler * 2;


const tripler = createFareMultiplier();
const fareTripler = tripler => tripler * 3;


function selectDifferentDrivers(arrayOfDrivers, drive){
  return drive(arrayOfDrivers);
}


  // returnLastTwoDrivers
// }



//   function fareDoubler(x){
//   return function(){
//     return x*2;
//   }


//   const selectingDrivers = function (){
// return ([returnFirstTwoDrivers (drivers)]);
//     return ([returnLastTwoDrivers(drivers)])}

// function selectingDrivers(array){
//   const array =[`returnFirstTwoDrivers(), returnLastTwoDrivers()`];

// }