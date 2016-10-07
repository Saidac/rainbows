// var colors = require('colors');
//
// function rawPower(string) {
// console.log(colors.white(string));
// console.log(colors.red(string));
// console.log(colors.green(string));
// console.log(colors.yellow(string));
// }
//
// for (var i = 2; i < process.argv.length; i++){
// setInterval(rawPower, 500, process.argv[i]);
// }
//
var colors = require('colors');
var song = [
  "Some people stand in the darkness",
  "Afraid to step into the light,",
  "Some people need to have somebody",
  "With the edge of surrender insight,"
];

function singBaby() {
  console.log(colors.white(song[0]));
  console.log(colors.cyan(song[1]));
  console.log(colors.magenta(song[2]));
  console.log(colors.green(song[3]));
}

for (var i = 2; i < song.length; i++) {
setInterval(singBaby, 500, song[i]);
}
