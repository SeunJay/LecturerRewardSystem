
const db = require('./db');
const Lecturer = require('./lecturer');

function Hod(username, email, password){
  Lecturer.call(this, username, email, password);
  this.status = "admin";
  this.studentScores = null
  console.log(this)
};

Hod.prototype = Object.create(Lecturer.prototype);
Hod.prototype.constructor = Hod;


Hod.prototype.readAllAccounts = function(){
  if(db.lecturers.length > 0){
    return 'These are all the available accounts';
  } else return "No lecturer's account available"
}

Hod.prototype.deleteAllAccounts = function(){
  if(db.lecturers.length){
    db.lecturers.length = 0;
    return 'All accounts have been successfully deleted'
  } else return 'All accounts have been successfully deleted'
};
Hod.prototype.isDeservingOfReward = function(lecturerID){
  let averageThresholdScore = 65;
  let normalScore = Hod.prototype.getStudentAverageScore(lecturerID);
  return (normalScore >= averageThresholdScore) ? 'You deserve some accolades': 'Try harder'
}


let chukwu = new Hod('Chukwu Angela', 'chukwu@gmail.com', 4567);
console.log(chukwu.createAccount());
// console.log(chukwu.readAllAccounts());
// console.log(chukwu.getStudentAverageScore(2))
// console.log(chukwu.isDeservingOfReward(2));
// console.log(chukwu.isDeservingOfReward(1))

module.exports = Hod;