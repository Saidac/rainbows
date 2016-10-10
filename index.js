var chalk = require('chalk');

function makeRainbows(string) {
  ['white', 'yellow', 'green', 'cyan', 'blue', 'red', 'magenta'].forEach(function(color) {
    console.log(chalk[color](string));
  });

  // same as:
  // console.log(colors.white(string));s
  // console.log(colors.yellow(string));
  // console.log(colors.green(string));
  // console.log(colors.cyan(string));
  // console.log(colors.blue(string));
  // console.log(colors.red(string));
  // console.log(colors.magenta(string));
}

for (var i = 2; i < process.argv.length; i++) {
  setInterval(makeRainbows, 300, process.argv[i]);
}
