const db = require('./db');

function Lecturer(username, email, password, ...studentScores){
  this.username = username;
  this.email = email;
  this.password = password;
  this.studentScores = studentScores[0]
}


Lecturer.prototype = {
  constructor: Lecturer,

  createAccount: function(){
    let id = 0;
    //let message = '';
    if(db.lecturers.length){
      id = db.lecturers[db.lecturers.length - 1].id + 1
    } else id = 1

    db.lecturers.push({
        id: id,
        username: this.username,
        email: this.email,
        password: this.password,
        studentScores: this.studentScores
    });

    console.log(db.lecturers);
    return 'Your account has been successfully created'
  }
}

module.exports = Lecturer