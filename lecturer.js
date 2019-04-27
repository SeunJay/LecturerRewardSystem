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
      function idGen() {
        return db.lecturers.length === 0 ? id = 1 : id = db.lecturers[db.lecturers.length - 1].id + 1
      }

      this.id = idGen()
      db.lecturers.push(this);
      return 'Your account has been successfully created'
  },

  readYourAccount: function(lecturerID){
    if(typeof lecturerID === 'number'){
      const user = db.lecturers.find(user => user.id === lecturerID)
      return user ? user : 'No account found'
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
        return 'Your account has been successfully updated'
      } else return 'You entered either the wrong username or password'
    }
  },

  getYourStudentScores: function(lecturerID){
    if(typeof lecturerID === 'number'){
      const user = db.lecturers.find(user => user.id === lecturerID)
      if(!user) return "No account found"
      return user.studentScores 
    } else return 'Invalid Input: Please enter an integer'
  },

  getStudentAverageScore: function(lecturerID){
    if(typeof lecturerID === 'number'){
    const user = db.lecturers.find(user => user.id === lecturerID) 
    if(!user) return "No account found"
    const sum = user.studentScores.reduce((a, b) => a + b)
    const averageStudentScores = sum/user.studentScores.length
    return averageStudentScores
    } else return 'Invalid Input: Please enter an integer'
  } 
}



let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
console.log(femi.createAccount());
let ojo = new Lecturer("Wole Ojo", "ojo@gmail.com", 2234, [60, 70, 67, 75]);
console.log(ojo.createAccount());

// console.log(ojo.readYourAccount(1));
// console.log(ojo.getStudentAverageScore('1'))

// console.log(db.lecturers[0].studentScores)




module.exports = Lecturer