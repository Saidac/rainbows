var colors = require('colors');

function rawPower(string) {
console.log(colors.white(string));
console.log(colors.red(string));
console.log(colors.green(string));
console.log(colors.yellow(string));
}

for (var i = 2; i < process.argv.length; i++){
setInterval(rawPower, 500, process.argv[i]);
}
