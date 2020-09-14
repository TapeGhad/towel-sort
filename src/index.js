module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  if (matrix.length === 0 ) return [];
  let arrSort = [], check = true;
  matrix.map(array => {
    if (check) {
      array.map(elem => {
      arrSort.push(elem);
      return elem;
    });
    check = false;
    }
    else {
      array.reverse().map(elem => {
        arrSort.push(elem);
        return elem;
      });
      check = true;
    }
    return array;
  });
  return arrSort;
}
