import {getDataFromLocalStorage, setDataToLocalStorage} from './getSetLocalStorage.js';

export const removeDataFromLocalStorage = (removeStore) => {
    
    let recieveGetDataLocalStorage = getDataFromLocalStorage();
    recieveGetDataLocalStorage.forEach( el => {
        if(Number(el.index) === Number(removeStore)){
            recieveGetDataLocalStorage = recieveGetDataLocalStorage.filter((el) => { 
                return Number(el.index) != Number(removeStore); 
            });
        }
    })
    setDataToLocalStorage(recieveGetDataLocalStorage);
}