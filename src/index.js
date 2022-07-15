import './style.css';
import {showDataStorage} from './showDataStorage.js';
import {addToLocalStorage} from './addDataToLocalStorage.js';
import {removeDataFromLocalStorage} from './removeFromLocalStorage.js';
import { setDataToLocalStorage } from './getSetLocalStorage';

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

 

document.addEventListener('click', function(e) {
  console.log('home', e.target.classList);
  if(e.target.classList.contains('fa-trash')){
    console.log(e.target);
  console.log(e.target.getAttribute("data-deleteid"));
  let readsv = e.target.getAttribute("data-deleteid");
  console.log('lop', readsv);
  removeDataFromLocalStorage(readsv);
  showDataStorage();
  }
})

document.addEventListener('change', function(e) {
  console.log('home', e.target.classList);
  if(e.target.classList.contains('checkbox')){
    let fred = this;
        console.log(e.target.parentElement, e);
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
  console.log('away', e.target.classList);
  if(e.target.classList.contains('fa-ellipsis-vertical')){
     console.log('edit me now');
     let shotty = document.querySelector("describetxt");
     shotty.setAttribute('contenteditable', 'true');
     console.log('high', shotty);
  }
})
