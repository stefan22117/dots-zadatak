const getMatrixFromString = (string) => {
    let rows = string.replace(/\r\n/g, "|").split("|");
  
    let columnNumber = 0;
    rows.forEach((row) => {
      if (row.length > columnNumber) {
        columnNumber = row.length;
      }
    });
  
    let arr = [];
  
    rows.forEach((row, i) => {
      arr[i] = [];
      row.split("").forEach((letter, j) => {
        arr[i][j] = letter;
      });
  
      while (arr[i].length < columnNumber) {
        arr[i].push(" ");
      }
    });
  
    return arr;
  };
  
  const getStringFromMatrix = (matrix) => {
    let str = ''
    matrix.forEach((row)=>{
        str+=row.join('') + '\n';
    })

    return str
}

module.exports = {
    getMatrixFromString,
    getStringFromMatrix
}