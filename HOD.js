
const db = require('./db');
const Lecturer = require('./lecturer');

function Hod(username, email, password){
  Lecturer.call(this, username, email, password)
};

Hod.prototype = Object.create(Lecturer.prototype);
Hod.prototype.constructor = Hod;

let chukwu = new Hod('Chukwu Angela', 'chukwu@gmail.com', 4567);
//console.log(chukwu.createAccount())

module.exports = Hod;