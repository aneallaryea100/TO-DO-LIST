import {getDataFromLocalStorage, setDataToLocalStorage} from './getSetLocalStorage.js';

export const removeDataFromLocalStorage = (removeStore) => {
    console.log('vals',removeStore);
    console.log('fga')
    let recieveGetDataLocalStorage = getDataFromLocalStorage();
    recieveGetDataLocalStorage.forEach( el => {
        console.log('gshs', el.index, removeStore, Number(el.index) === Number(removeStore));
        if(Number(el.index) === Number(removeStore)){
            recieveGetDataLocalStorage = recieveGetDataLocalStorage.filter((el) => { 
                return Number(el.index) != Number(removeStore); 
            });
        }
    })
    setDataToLocalStorage(recieveGetDataLocalStorage);
}