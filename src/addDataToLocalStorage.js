import { getDataFromLocalStorage, setDataToLocalStorage } from './getSetLocalStorage.js';

export default function addToLocalStorage(adda) {
  const recieveGetDataLocalStorage = getDataFromLocalStorage();
  recieveGetDataLocalStorage.push({
    description: adda,
    completed: false,
    index: recieveGetDataLocalStorage.length + 1,
  });
  setDataToLocalStorage(recieveGetDataLocalStorage);
}
