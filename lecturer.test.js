const Lecturer = require('./lecturer');
const db = require('./db');

describe('Lecturer functionalities', () =>{
  test('Check to see that the Lecturer constructor has been defined', () =>{
    let femi = new Lecturer('Femi Ayoola', 'femi@gmail.com', 1155, [50, 60, 67, 75]);
    expect(femi).toBeDefined();
  })

  test("Check for the instance of the Lecturer Constructor", () => {
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi).toEqual({username: 'Femi Ayoola', email: 'femi@gmail.com', password: 1155, studentScores: [50, 60, 67, 75]});
  });

  test("Check to see that a lecturer Femi has created his account", () => {
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.createAccount()).toBe('Your account has been successfully created');
  });

  test("Check to see that a lecturer Ojo has created his account", () => {
    let ojo = new Lecturer("Wole Ojo", "ojo@gmail.com", 2234, [60, 70, 67, 75]);
    expect(ojo.createAccount()).toBe('Your account has been successfully created');
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.readYourAccount(1)).toEqual({id: 1, username: 'Femi Ayoola', email: 'femi@gmail.com', password: 1155, studentScores: [50, 60, 67, 75]})
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.readYourAccount('1')).toEqual('Invalid Input: Please enter an integer')
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.readYourAccount(10)).toEqual('No account found')
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.readYourAccount(10)).toEqual('No account found')
  });

  test("check to see that a lecturer can read his account by ID", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.updateYourAccount('Femi Ayoola', 'Femzy', 1155, 1115, 'femi@gmail.com', [60, 70, 65, 71])).toEqual('Your account has been successfully updated')
  });

  test("Should return am error message if a wrong username or password is passed in", () =>{
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.updateYourAccount('Femi Aya', 'Femzy', 1155, 1115, 'femi@gmail.com', [60, 70, 65, 71])).toEqual('You entered either the wrong username or password')
  });
})