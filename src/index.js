import './style.css';
import {showDataStorage} from './showDataStorage.js';
import {addToLocalStorage} from './addDataToLocalStorage.js';
import {removeDataFromLocalStorage} from './removeFromLocalStorage.js';
import { setDataToLocalStorage } from './getSetLocalStorage';
import { enableEdit, editTask } from './editInput.js';

showDataStorage();

//Add list event
const textInput = document.querySelector('#textField');
textInput.addEventListener('keypress', e => {
  if(e.key === 'Enter' && textInput.value){
    e.preventDefault();
    addToLocalStorage(textInput.value);
    textInput.value = '';
    showDataStorage();
  }
})

 
// remove local stotrage
document.addEventListener('click', function(e) {
  if(e.target.classList.contains('fa-trash')){
  let readsv = e.target.getAttribute("data-deleteid");
  removeDataFromLocalStorage(readsv);
  showDataStorage();
  }
})



document.addEventListener('change', function(e) {
  if(e.target.classList.contains('checkbox')){
        if(e.target.checked === true){
            document.querySelector(`#t-${e.target.id}`).classList.add('trash-active');
            document.querySelector(`#e-${e.target.id}`).classList.add('edit-disable');
            e.target.nextElementSibling.classList.add('checkTodo');
        }else{
            document.querySelector(`#t-${e.target.id}`).classList.remove('trash-active');
            document.querySelector(`#e-${e.target.id}`).classList.remove('edit-disable');
            e.target.nextElementSibling.classList.remove('checkTodo');
        }
  }
})

document.addEventListener('click', function(e) {
  if(e.target.classList.contains('fa-ellipsis-vertical')){
     if(e.target.clicked === true){
      document.querySelector('.describetxt').editTask();
     }
  }
})


// onclick = 'enableEdit'