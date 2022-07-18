import './style.css';
import showDataStorage from './showDataStorage.js';
import addToLocalStorage from './addDataToLocalStorage.js';
import removeDataFromLocalStorage from './removeFromLocalStorage.js';
import editElement from './editInput.js';
import checkListBox from './checkBoxTrue.js';
import clearList from './clearAllField.js';

showDataStorage();

// Add list event
const textInput = document.querySelector('#textField');
textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault();
    addToLocalStorage(textInput.value);
    textInput.value = '';
    showDataStorage();
  }
});

// remove local stotrage
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    const readsv = e.target.getAttribute('data-deleteid');
    removeDataFromLocalStorage(readsv);
    showDataStorage();
  }
});

// checkbox
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    if (e.target.checked === true) {
      document.querySelector(`#t-${e.target.id}`).classList.add('trash-active');
      document.querySelector(`#e-${e.target.id}`).classList.add('edit-disable');
      e.target.nextElementSibling.classList.add('checkTodo');
    } else {
      document.querySelector(`#t-${e.target.id}`).classList.remove('trash-active');
      document.querySelector(`#e-${e.target.id}`).classList.remove('edit-disable');
      e.target.nextElementSibling.classList.remove('checkTodo');
    }
    const Id = Number(e.target.id);
    const completed = e.target.checked;
    checkListBox(Id, completed);
  }
});

// edit input
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('describetxt')) {
    event.target.onchange = editElement;
  }
});

// clear all checked box
document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('clear-field')) {
    clearList();
    showDataStorage();
  }
});
