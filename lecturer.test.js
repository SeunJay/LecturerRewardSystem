const Lecturer = require('./lecturer');
const db = require('./db');
const Hod = require('./HOD');

let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
let ojo = new Lecturer("Wole Ojo", "ojo@gmail.com", 2234, [60, 70, 67, 75]);


let chukwu = new Hod('Chukwu Angela', 'chukwu@gmail.com', 4567);

describe('Lecturer functionalities', () =>{
  test('Check to see that the Lecturer constructor has been defined', () =>{
    expect(femi).toBeDefined();
  });

  test('Check to see that the Lecturer constructor has been defined', () =>{
    expect(ojo).toBeDefined();
  })

  test("Check for the instance of the Lecturer Constructor", () => {
    expect(femi).toEqual({username: 'Femi Ayoola', email: 'femi@gmail.com', password: 1155, studentScores: [50, 60, 67, 75]});
  });

  test("Check for the instance of the Lecturer Constructor", () => {
    expect(ojo).toEqual({username: 'Wole Ojo', email: 'ojo@gmail.com', password: 2234, studentScores: [60, 70, 67, 75]});
  });

  test("Check to see that a lecturer Femi has created his account", () => {
    expect(femi.createAccount()).toBe('Your account has been successfully created');
  });

  test("Check to see that a lecturer Ojo has created his account", () => {
    expect(ojo.createAccount()).toBe('Your account has been successfully created');
  });


  

  test("check to see that a lecturer can read his account by ID", () =>{
    expect(femi.readYourAccount(1)).toEqual({id: 1, username: 'Femi Ayoola', email: 'femi@gmail.com', password: 1155, studentScores: [50, 60, 67, 75]})
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    expect(ojo.readYourAccount(2)).toEqual({id: 2, username: 'Wole Ojo', email: 'ojo@gmail.com', password: 2234,studentScores: [60, 70, 67, 75]})
  });


  test("should return an error if the the data type of what is passed in is not a number", () =>{
    expect(femi.readYourAccount('1')).toEqual('Invalid Input: Please enter an integer')
  });

  test("should return an error if an invalid ID is entered", () =>{
    expect(femi.readYourAccount(10)).toEqual('No account found')
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    expect(femi.readYourAccount(10)).toEqual('No account found')
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    expect(femi.updateYourAccount('Femi Ayoola', 'Femzy', 1155, 1116, 'femi@gmail.com', [50, 60, 67, 75])).toEqual('Your account has been successfully updated')
  });

  test("Should return am error message if a wrong username or password is passed in", () =>{
    expect(femi.updateYourAccount('Femi Aya', 'Femzy', 1157, 1115, 'femi@gmail.com', [50, 60, 67, 75])).toEqual('You entered either the wrong username or password')
  });

  test("Check to see that a registered lecturer can get his student's scores", () =>{
    expect(femi.getYourStudentScores(1)).toEqual([50, 60, 67, 75])
  });

  test("Return an error message if the data type of what is passed in is not a number", () =>{
    expect(femi.getYourStudentScores('1')).toEqual('Invalid Input: Please enter an integer')
  });

  test("Return an error message if invalid lecturer ID is passed in", () =>{
    expect(femi.getYourStudentScores(10)).toEqual('No account found')
  });

  test("Check to see that a lecturer can compute his student's average score", () =>{
    expect(femi.getStudentAverageScore(1)).toBe(63)
  });

  test("Should an error if the data type of what is passed in is not a number", () =>{
    expect(femi.getStudentAverageScore('1')).toEqual('Invalid Input: Please enter an integer')
  });

  test("Should an error if the data type of what is passed in is not a number", () =>{
    expect(femi.getStudentAverageScore(10)).toEqual('No account found')
  })
});

describe('HOD functionalities', () =>{
  test('Check to see that the HOD constructor has been defined', () =>{
    expect(chukwu).toBeDefined();
  });
  
  test("Check to see that Hod Chukwu can create her account", () =>{
    expect(chukwu.createAccount()).toEqual('Your account has been successfully created')
  });

  test("Check to see that Hod Chukwu can read all lecturer's account", () =>{
    expect(chukwu.readAllAccounts()).toEqual('These are all the available accounts');
  });

  test("Check to see that Hod Chukwu can determine whether a lecturer is deserving of a reward", () =>{
    expect(chukwu.isDeservingOfReward(1)).toEqual('Try harder');
  });

  test("Check to see that Hod Chukwu can determine whether a lecturer is deserving of a reward", () =>{
    expect(chukwu.isDeservingOfReward(2)).toEqual('You deserve some accolades');
  });

  test("Check to see that Hod Chukwu can delete all lecturer's account", () =>{
    expect(chukwu.deleteAllAccounts()).toEqual('All accounts have been successfully deleted');
  });

  test("Check to see that Hod Chukwu can read all lecturer's account", () =>{
    expect(chukwu.readAllAccounts()).toEqual("No lecturer's account available");
  });

  test("Check to see that Hod Chukwu can delete all lecturer's account", () =>{
    expect(chukwu.deleteAllAccounts()).toEqual('All accounts have been successfully deleted');
  });

})