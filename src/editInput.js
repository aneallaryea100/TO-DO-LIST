import {setDataToLocalStorage} from './getSetLocalStorage.js';

export function enableEdit() {
    this.parentNode.querySelector('.describetxt').disabled = false;
    this.parentNode.querySelector('.describetxt').focus();
  }
  
  export const editTask = () => {
    const index = parseInt(this.parentNode.querySelector('.describetxt').charAt(2).id, 10);
    this.disabled = true;
    this.parentNode.querySelector('.task').focus();
    const tasks = JSON.parse(localStorage.getItem('list'));
    tasks[index].description = this.parentNode.querySelector('.describetxt').value;
    localStorage.setItem('list', JSON.stringify(tasks));
  }
  

  //edit with zubair
  export const editElement = (id, value) => {
    const getfromstorage = JSON.parse(localStorage.getItem('list'));

    getfromstorage.forEach((els) => {
      if(els.index === id){
        els.description = value;
      }
      setDataToLocalStorage(getfromstorage);
    });
  };