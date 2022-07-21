import addToLocalStorage from './addDataToLocalStorage.js';

test('the length of the local storage', () => {
  const arrayLength = JSON.parse(localStorage.getItem('list')) || [];
  arrayLength.push({
    description: 'adda',
    completed: false,
    index: 1,
  });

  expect(addToLocalStorage('adda')).toEqual(arrayLength.description);
  expect(arrayLength.length).toEqual(1);
});