import {getDataFromLocalStorage} from './getSetLocalStorage.js';
 

const todosMainContain = document.querySelector('.todos-container');
// let checkboxs = null;


export const showDataStorage = () => {
    let recieveGetDataLocalStorage = getDataFromLocalStorage();
   todosMainContain.innerHTML = '';
   recieveGetDataLocalStorage.forEach((list) => {
       todosMainContain.innerHTML += `
       <div class="todoContainer checkedContainer">
       <p>
    <input type="checkbox" class="checkbox" id="${list.index}" value = "${list.completed}">
    <span id = "${list.index}" class="describetxt">${list.description}</span>
    </p>
    <i class="fa-solid fa-ellipsis-vertical" id="e-${list.index}"></i>
    <i class="fa-solid fa-trash" id="t-${list.index}" data-deleteid = "${list.index}"></i>
       </div>
       `
   })

   

}