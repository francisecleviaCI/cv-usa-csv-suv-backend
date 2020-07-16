const getDate = require('./get-date.js');
const getTotalCases = require('./get-total-cases.js');

//takes in a date string & 2D array//
//date is 3rd Index, cases is 4th index//
const getTotalCasesByDay = function(dateString, array){




//loop through each row of the data//is this nested?
for (let i = 0; i < dateString.length; i++){
  for (let j = 0; j < array.length; j++){
const theDate = getDate(dateString[i]);
const caseArray = getTotalCases(theDate);

//returns total cases
return caseArray;
}
}
console.log(caseArray);
}






if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
