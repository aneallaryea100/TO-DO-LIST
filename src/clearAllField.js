import { setDataToLocalStorage, getDataFromLocalStorage } from './getSetLocalStorage.js';

export default function clearList() {
  // let getfromStorage = JSON.parse(localStorage.getItem('list'));
  let getfromStorage = getDataFromLocalStorage();
  getfromStorage = getfromStorage.filter((el) => el.completed === false);
  // localStorage.setItem('list', JSON.stringify(getfromStorage));
  setDataToLocalStorage(getfromStorage);
}