import {getDataFromLocalStorage, setDataToLocalStorage} from './getSetLocalStorage.js';

export const addToLocalStorage = (adda) => {
    let recieveGetDataLocalStorage = getDataFromLocalStorage();
    recieveGetDataLocalStorage.push({
        description: adda,
        completed : false,
        index: recieveGetDataLocalStorage.length + 1,
    });
    setDataToLocalStorage(recieveGetDataLocalStorage);
}