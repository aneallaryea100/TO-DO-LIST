// const removeDataFromLocalStorage = require('./removeFromLocalStorage.js');

test('remove item from local storage', () => {
  const list = {
    description: 'adda',
    completed: false,
    index: 1,
  };

  const list2 = {
    description: 'kaaks',
    completed: false,
    index: 2,
  };

  const localstorage = JSON.parse(localStorage.getItem('list')) || [];
  localstorage.push(list);
  expect(localstorage).toHaveLength(1);
  localstorage.push(list2);
  expect(localstorage).toHaveLength(2);
  localstorage.pop();
  expect(localstorage).toHaveLength(1);
});
