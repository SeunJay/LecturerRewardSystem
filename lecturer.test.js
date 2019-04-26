const Lecturer = require('./lecturer');
const db = require('./db');

describe('Lecturer functionalities', () =>{
  test('Check to see that the Lecturer constructor has been defined', () =>{
    let femi = new Lecturer('Femi Ayola', 'femi@gmail.com', 1155, [50, 60, 67, 75]);
    expect(femi).toBeDefined();
  })
})