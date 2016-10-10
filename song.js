var chalk = require('chalk');

var lyrics = [
'Test me baby yeah!',
'Or test this line!'
];

function printRandomLine(string) {
  var randomNumber = Math.floor(Math.random() * 10),
      possibleColors = [
        'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'red', 'green', 'blue', 'red'
      ];

  console.log(chalk[possibleColors[randomNumber]](string));
  // dynamic version of: console.log(colors.red(string))
}


for (var i = 0; i < lyrics.length; i++) {
  printRandomLine(lyrics[i]);
}
