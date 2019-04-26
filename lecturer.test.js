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

  test("Check to see that a lecturer has created his account", () => {
    let femi = new Lecturer("Femi Ayoola", "femi@gmail.com", 1155, [50, 60, 67, 75]);
    expect(femi.createAccount()).toBe('Your account has been successfully created');
  })

})