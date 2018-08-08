console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
// console.log(module);
// module.exports.age = 30;
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// }
// challenge create a function that will export to app.js
// module.exports.sum = (a, b) =>{
//   return c = a + b;
// }
