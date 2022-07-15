import './style.css';
import {showDataStorage} from './showDataStorage.js';
import {addToLocalStorage} from './addDataToLocalStorage.js';
import {removeDataFromLocalStorage} from './removeFromLocalStorage.js';
import { setDataToLocalStorage } from './getSetLocalStorage';
import {editElement} from './editInput.js';

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


// checkbox
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

// edit input
document.addEventListener('click', (event)=>{
  if(event.target.classList.contains('describetxt')){
    const Id = Number(event.target.id);
    const value = event.target.value;
    editElement(Id, value);
  }
})

// document.addEventListener('click', (event)=>{
//   if(event.target.classList.contains('checkbox')){
//     const checkBox = event.target;

//     const value = checkBox.checked;


//   }
// })


// onclick = 'enableEdit'