
const db = require('./db');
const Lecturer = require('./lecturer');

function Hod(username, email, password){
  Lecturer.call(this, username, email, password)
};

Hod.prototype = Object.create(Lecturer.prototype);
Hod.prototype.constructor = Hod;

let chukwu = new Hod('Chukwu Angela', 'chukwu@gmail.com', 4567);
//console.log(chukwu.createAccount())

Hod.prototype.readAllAccounts = function(){
  if(db.lecturers.length > 0){
    console.log(db.lecturers);
    return 'These are all the available accounts';
  } else return "No lecturer's account available"
}

Hod.prototype.deleteAllAccounts = function(){
  if(db.lecturers.length){
    db.lecturers.length = 0;
    return 'All accounts have been successfully deleted'
  } else return 'All accounts have been successfully deleted'
}

module.exports = Hod;