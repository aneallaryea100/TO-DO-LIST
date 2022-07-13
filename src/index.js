import './style.css';

//variables declaration
const textInput = document.querySelector('input');
const todosMainContain = document.querySelector('.todos-container');
const clearAllbtn = document.querySelector('.clear-field');

const arrayObject = [
  {
    description : "Go to the super market",
    completed : false,
    index : 1,
  },
  {
    description : "Go to the Stadium",
    completed : false,
    index : 2,
  },
  {
    description : "Submit the assignment",
    completed : false,
    index : 3,
  },
];

const displayTemplate = (display) => {
  const todoContainer = document.createElement('div');
    todoContainer.className = 'todoContainer';
    todoContainer.innerHTML += `
    <p>
    <input type="checkbox" class="checkbox" value = "${display.completed}">
    <span id = "${display.index}">${display.description}</span>
    </p>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;

    return todoContainer;
}

arrayObject.forEach((e) => {
  todosMainContain.appendChild(displayTemplate(e));
});
