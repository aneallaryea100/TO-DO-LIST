import {setDataToLocalStorage} from './getSetLocalStorage.js';

  export const editElement = (id, value) => {
    const getfromstorage = JSON.parse(localStorage.getItem('list'));

    getfromstorage.forEach((els) => {
      if(els.index === id){
        els.description = value;
      }
      localStorage.setItem('list',JSON.stringify(getfromstorage));
    });
  };