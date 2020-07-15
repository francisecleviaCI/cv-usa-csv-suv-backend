

const getRow = function(csv){

  return csv.split(',')

}




if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
