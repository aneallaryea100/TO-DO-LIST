// const addToLocalStorage = require('./addDataToLocalStorage.js');
import addToLocalStorage from './addDataToLocalStorage.js';

const arrayLenghts = JSON.parse(localStorage.getItem('list')) || [];
const recieveGetDataLocalStorage = {
  description: 'text',
  completed: false,
  index: arrayLenghts.length + 1,
};
// test the add to the html and to the local storage
test('check add item in the list', () => {
  addToLocalStorage(recieveGetDataLocalStorage);
  const div = document.querySelectorAll('.todoContainer checkedContainer');
  expect(div).toHaveLength(1);
  expect(JSON.parse(localStorage.getItem('list'))).toBe(1);
// expect(localStorage.setItem('list', JSON.stringify(recieveGetDataLocalStorage))).toHaveLength(1);
});