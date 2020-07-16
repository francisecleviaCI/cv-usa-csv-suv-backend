const getRow = require('./get-row.js');


const newArray = []; //Make a new array
const getRows = function(csv){

const newRows = getRow(csv);  //Split the csv string //getRow()

//loop through the array
for (let i = 0; i < newRows.length; i++){

//push an array for each string into new array

newArray.push(newRows)
}
return newArray;
}
console.log(newArray)


if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
