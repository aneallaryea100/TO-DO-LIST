import { getDataFromLocalStorage, setDataToLocalStorage } from './getSetLocalStorage.js';

export default function removeDataFromLocalStorage(removeStore) {
  let recieveGetDataLocalStorage = getDataFromLocalStorage();
  recieveGetDataLocalStorage.forEach((el) => {
    if (Number(el.index) === Number(removeStore)) {
      recieveGetDataLocalStorage = recieveGetDataLocalStorage
        .filter((el) => Number(el.index) !== Number(removeStore));
    }
  });
  setDataToLocalStorage(recieveGetDataLocalStorage);
}
