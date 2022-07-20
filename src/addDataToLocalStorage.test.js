const addToLocalStorage = require('./addDataToLocalStorage.js');

const recieveGetDataLocalStorage = { description: 'text', completed: false, index: 1 };
// test the add to the html and to the local storage
test('check add item in the list', () => {
  addToLocalStorage(recieveGetDataLocalStorage);
  const div = document.querySelectorAll('.todoContainer checkedContainer');
  expect(div).toHaveLength(1);
  expect(JSON.parse(localStorage.getItem('List'))).toHaveLength(1);
});