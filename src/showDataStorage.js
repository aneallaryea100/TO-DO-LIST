import { getDataFromLocalStorage } from './getSetLocalStorage.js';
import editElement from './editInput.js';

const todosMainContain = document.querySelector('.todos-container');
export default function showDataStorage() {
  const recieveGetDataLocalStorage = getDataFromLocalStorage();
  todosMainContain.innerHTML = '';
  recieveGetDataLocalStorage.forEach((list) => {
    const div1 = document.createElement('div');
    div1.className = 'todoContainer checkedContainer';
    const pEl = document.createElement('p');
    const input1 = document.createElement('input');
    input1.type = 'checkbox';
    input1.className = 'checkbox';
    input1.id = list.index;
    input1.value = list.completed;
    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = list.index;
    input2.className = 'describetxt';
    input2.value = list.description;
    input2.onchange = editElement;
    const ifirst = document.createElement('i');
    ifirst.className = 'fa-solid fa-ellipsis-vertical';
    ifirst.id = `e-${list.index}`;
    const isecond = document.createElement('i');
    isecond.className = 'fa-solid fa-trash';
    isecond.setAttribute('data-deleteid', list.index);
    isecond.id = `t-${list.index}`;
    pEl.append(input1, input2);
    div1.append(pEl, ifirst, isecond);
    todosMainContain.appendChild(div1);
  });
}
