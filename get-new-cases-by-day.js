const getDate = require('./get-date.js');
const getNewCases = require('./get-new-cases.js');

//takes in a date string & 2D array//
//date is 3rd Index, new cases is 5th index//
const getNewCasesByDay = function(dateString, array){




//loop through each row of the data//is this nested
for (let i = 0; i < dateString.length; i++){
  for (let j = 0; j < array.length; j++){
const theDate = getDate(dateString[i]);
const caseArray = getNewCases(theDate);

//returns total cases
return caseArray;
}
}
console.log(caseArray);
}




if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
