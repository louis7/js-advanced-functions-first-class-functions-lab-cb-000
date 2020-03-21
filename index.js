// Code your solution in this file!
const returnFirstTwoDrivers = function( array ) {
  let first_two = array.slice(0,2)
  return first_two;
};

const returnLastTwoDrivers = function( array ) {
  let last_two = array.slice(array.lenght,array.lenght-1)
  return last_two;
};
