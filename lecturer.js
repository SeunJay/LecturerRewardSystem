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
  },

  readYourAccount: function(lecturerID){
    if(typeof lecturerID === 'number'){
      for(let i in db.lecturers){
        if(lecturerID === db.lecturers[i].id){
          return db.lecturers[i];
        } else return 'No account found'
      }
    } else return 'Invalid Input: Please enter an integer'
  },

  updateYourAccount: function(username, newusername, password, newpassword, email, ...studentScores){
    this.username = username;
    this.newusername = newusername;
    this.password = password;
    this.newpassword = newpassword;
    this.email = email;
    this.studentScores = studentScores;

    for(let i in db.lecturers){
      if(this.username === db.lecturers[i].username && this.password === db.lecturers[i].password){
        db.lecturers[i].username = this.newusername;
        db.lecturers[i].password = this.newpassword;
        console.log(db.lecturers[i]);
        return 'Your account has been successfully updated'
      } else return 'You entered either the wrong username or password'
    }
  },

  getYourStudentScores: function(lecturerID){
    if(typeof lecturerID === 'number'){
      for(let i in db.lecturers){
        if(lecturerID === db.lecturers[i].id){
          console.log(db.lecturers[i].studentScores);
          return db.lecturers[i].studentScores
        } else return 'No account found'
      }
    } else return 'Invalid Input: Please enter an integer'
  },

  getStudentAverageScore: function(lecturerID){
    if(typeof lecturerID === 'number'){
      for(let i in db.lecturers){
        if(lecturerID === db.lecturers[i].id){
          let scores = db.lecturers[i].studentScores;
          let sum = scores.reduce((a, b) => a + b);
          let averageStudentScores = sum/scores.length;
          console.log(averageStudentScores);
          return averageStudentScores
        }
      }
    } else return 'Invalid Input: Please enter an integer'
  } 
}

let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
console.log(femi.createAccount());

//console.log(femi.getYourStudentScores(1))

console.log(femi.getStudentAverageScore(1))




module.exports = Lecturer