const tail = function(array) {
  newArray = [];
  newArray = array.slice(1);
  return newArray;
};

module.exports = tail;