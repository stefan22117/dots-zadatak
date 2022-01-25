const {
  getMatrixFromString,
  getStringFromMatrix,
} = require("./stringMatrixFunctions");
const { findCoordinates, findPath } = require("./coordinateFunctions");
const readline = require("readline");
const fs = require("fs");
const { exit } = require("process");

let alphabet = `abcdefghijklmnopqrstuvwxyz`;

let str = `   a
  e
   
d     b

      
   c`;

const createNewMatrix = (str) => {
  let matrix = getMatrixFromString(str);

  let lettersCoordinates = [];

  alphabet.split("").forEach((letter) => {
    let cords = findCoordinates(letter, matrix);
    if (cords) {
      lettersCoordinates.push(cords);
    }
  });

  lettersCoordinates.forEach((cord, i, arr) => {
    matrix[cord.y][cord.x] = "*";

    if (!arr[i + 1]) {
      return;
    }
    let putanje = findPath(arr[i], arr[i + 1]);

    putanje.forEach((p) => {
      matrix[p.y][p.x] = "*";
    });
  });

  return matrix;
};

// exit()

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question(`Write string (y) or read file (n) ?\n`, (text) => {
  if (text == "Y" || text == "y") {
    var input = [];
    console.log("Press Ctrl + D + Enter to terminate\n");

    rl.prompt();

    rl.on("line", function (cmd) {
      let slova = cmd.split("");

      input.push(slova);

      // Ctrl + D / ^D / ♦ / \x04
      //Ctrl + Z / ^Z / → / \x1A
      if (slova.includes("\x04") || slova.includes("\x1A")) {
        rl.close();
      }
    });

    rl.on("close", function (cmd) {
      let string = "";

      input.forEach((red) => {
        if (red[red.length - 1] == "\x04" || red[red.length - 1] == "\x1A") {
          red = red.splice(0, red.length - 1);
        }
        str = red.join("");
        string += str + "\r\n";
      });

      let newMatrix = createNewMatrix(string);
      let stringToShow = getStringFromMatrix(newMatrix)
      console.log(stringToShow);
      fs.writeFileSync('output.txt',stringToShow)
    });
  } else {
    rl.question("Enter file name (only txt files): ", (file) => {
      if (!file.includes(".txt")) {
        file += ".txt";
      }

      if (fs.existsSync(file)) {
        fs.readFile(file, "utf8", (err, data) => {
          if (err) {
            console.log(err);
          }
          let newMatrix = createNewMatrix(data);
          let stringToShow = getStringFromMatrix(newMatrix)
          console.log(stringToShow);
          fs.writeFileSync('output.txt',stringToShow)
          rl.close();
        });
      } else {
        console.log("You have selected a file that doesn't exist");
        rl.close();
      }
    });
  }
});
