const { addToLocalStorage, removeDataFromLocalStorage } = require('./add_remove.js');

describe('add and remove function tests', () => {
  test('adding to the local storage', () => {
    const arrayLength = JSON.parse(localStorage.getItem('list')) || [];
    arrayLength.push({
      description: 'adda',
      completed: false,
      index: 1,
    });

    expect(addToLocalStorage('adda')).toEqual(arrayLength.description);
    expect(arrayLength.length).toEqual(1);
  });

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
    expect(localstorage).toHaveLength(2);
    localstorage.push(list2);
    expect(localstorage).toHaveLength(3);
    localstorage.pop();
    expect(localstorage).toHaveLength(2);
    const delbtn = document.querySelectorAll('fa-trash');
    if (delbtn) {
      expect(removeDataFromLocalStorage('kaaks')).toEqual(localstorage[2]);
      expect(localstorage.length).toEqual(2);
    }
  });
});