import { values } from "lodash";
//my array for storage
const localList = JSON.parse(localStorage.getItem('list')) || [];

const todosMainContain = document.querySelector('.todos-container');
let checkboxs = null;

const showList = () => {
   let storeListItems = JSON.parse(localStorage.getItem('list'));
   todosMainContain.innerHTML = '';
   storeListItems.forEach((list) => {
       todosMainContain.innerHTML += `
       <div class="todoContainer checkedContainer">
       <p>
    <input type="checkbox" class="checkbox" id="${list.index}" value = "${list.completed}">
    <span id = "${list.index}">${list.description}</span>
    </p>
    <i class="fa-solid fa-ellipsis-vertical" id="e-${list.index}"></i>
    <i class="fa-solid fa-trash" id="t-${list.index}"></i>
       </div>
       `
   })

    checkboxs = document.querySelectorAll('.checkbox');
    checkboxs.forEach( i => {
        i.addEventListener('change', (e) => {
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
        });
    });

    // document.querySelectorAll('i.fa-ellipsis-vertical').forEach(i => i.onclick= enableEdit)
}


 
     
 
 export const getLocalStore = () => {
    const localStore = window.localStorage.getItem('list');
    if(localStore !== null){
       showList();
    }
 
    return localStore;
 };
 

// const addList = (list) => {
//     list.forEach( el => {
//         showList();
//     });
// };


export const addListToLocalStorage = (inputValue) => {
    const listTask = {
        description: inputValue,
        completed: false,
        index: localList.length + 1,
    }

    localList.push(listTask);
    localStore(localList);
    showList();
};

export const removeListElement = (id) => {
    todosMainContain.removeChild(id);
    let count = 0;
    const locals = JSON.parse(localStorage.getItem('list'));
    console.log(id);
    // let index = id.querySelector('.fa-solid');
    const index = parseInt(id.querySelector('.fa-solid').id.charAt(2),10)
    console.log(index);
    locals.splice(index-1,1);
    /* locals.forEach((list, index) => {
        if(list.id === index){
            locals.removeItem(index);
        }
    }) */
    // const stores = Array.from(locals).filter(i => i.completed === false);
    // stores.map(i => i.index = count += 1);
    localStorage.setItem('list', JSON.stringify(locals));
};





 
