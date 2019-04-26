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

  // test("Check for the instance of the Lecturer Constructor", () => {
  //   let ojo = new Lecturer("Wole Ojo", "ojo@gmail.com", 2234, [60, 70, 67, 75]);
  //   expect(ojo).toEqual({username: 'Wole Ojo', email: 'ojo@gmail.com', password: 2234, studentScores: [60, 70, 67, 75]});
  // });

  test("Check to see that a lecturer Ojo has created his account", () => {
    let ojo = new Lecturer("Wole Ojo", "ojo@gmail.com", 2234, [60, 70, 67, 75]);
    expect(ojo.createAccount()).toBe('Your account has been successfully created');
  })

})