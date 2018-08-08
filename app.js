console.log('Starting app.js');
// watch 15
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}

// console.log(_.isString(true));
// console.log(_.isString("PanchoDelRancho"));
// let arr = ([1,6,2,3,7,8,6,4,2,6,6,8,3,4,4,3,5,6,2,4,5,6,2]);
// console.log(_.uniq(arr));
//challenge user the sumOf function here
// let sumOf = notes.sum(3,4);
// console.log(sumOf);

// let res = notes.addNote();
// console.log(res);
// let user = os.userInfo();

// console.log(user.username);
// `` tick's allow us to user the ${} in order to pass through the java script variable

// fs.appendFile("greetings.txt", "Hola, "+ user.username+"!", function(err){
//   if(err){
//     console.log("No manches carnalito no se pude escribir al archivo");
//   }
// });

// fs.appendFile("greetings.txt", `Hola, yo soy ${user.username}. Tengo ${notes.age} de vida`, function(err){
//   if(err){
//     console.log("No manches carnalito no se pude escribir al archivo");
//   }
// });
