
function Lecturer(username, email, password, ...studentScores){
  this.username = username;
  this.email = email;
  this.password = password;
  this.studentScores = studentScores[0]
}


module.exports = Lecturer