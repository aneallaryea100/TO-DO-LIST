import { getDataFromLocalStorage, setDataToLocalStorage } from './getSetLocalStorage.js';

function removeDataFromLocalStorage(removeStore) {
  let recieveGetDataLocalStorage = getDataFromLocalStorage();
  recieveGetDataLocalStorage.forEach((el) => {
    if (Number(el.index) === Number(removeStore)) {
      recieveGetDataLocalStorage = recieveGetDataLocalStorage
        .filter((el) => Number(el.index) !== Number(removeStore));
    }
  });
  setDataToLocalStorage(recieveGetDataLocalStorage);
}

function addToLocalStorage(adda) {
  const recieveGetDataLocalStorage = getDataFromLocalStorage();
  recieveGetDataLocalStorage.push({
    description: adda,
    completed: false,
    index: recieveGetDataLocalStorage.length + 1,
  });
  setDataToLocalStorage(recieveGetDataLocalStorage);
}

module.exports = { removeDataFromLocalStorage, addToLocalStorage };
