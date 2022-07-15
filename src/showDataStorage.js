import {getDataFromLocalStorage} from './getSetLocalStorage.js';

 

const todosMainContain = document.querySelector('.todos-container');


export const showDataStorage = () => {
    let recieveGetDataLocalStorage = getDataFromLocalStorage();
   todosMainContain.innerHTML = '';
   recieveGetDataLocalStorage.forEach((list) => {
       todosMainContain.innerHTML += `
       <div class="todoContainer checkedContainer">
       <p>
    <input type="checkbox" class="checkbox" id="${list.index}" value = "${list.completed}">
    <input type='text' id = "${list.index}" class="describetxt" value=${list.description}>
    </p>
    <i class="fa-solid fa-ellipsis-vertical"  id="e-${list.index}"></i>
    <i class="fa-solid fa-trash" id="t-${list.index}" data-deleteid = "${list.index}"></i>
       </div>
       `
   })

   

}