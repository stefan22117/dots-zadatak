
const findCoordinates = (letter, twoDArray) => {
    let coordinates;

    twoDArray.forEach((row, i)=> {
        if(row.includes(letter)){
            coordinates = {
                x: row.indexOf(letter), 
                y:i
            }
            return;
        }
    });
    return coordinates;
}













const findPath = (first, second) => {
    let arr = [];
  
    let pivot = { ...first };
  
    while (pivot.x != second.x || pivot.y != second.y) {
      if (pivot.x < second.x) {
        pivot.x += 1;
      }
      if (pivot.y < second.y) {
        pivot.y += 1;
      }
      if (pivot.x > second.x) {
        pivot.x -= 1;
      }
      if (pivot.y > second.y) {
        pivot.y -= 1;
      }
      if (pivot.x == second.x && pivot.y == second.y) {
        break;
      }
  
      arr.push({ ...pivot });
    }
    return arr;
  };
  



  module.exports = {
    findCoordinates,
    findPath
}