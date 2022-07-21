function editElement() {
  const getfromStorage = JSON.parse(localStorage.getItem('list'));
  const Id = Number(this.id);
  const { value } = this;
  getfromStorage[Id - 1].description = value;
  localStorage.setItem('list', JSON.stringify(getfromStorage));
}

// clear
function clearList() {
  let getfromStorage = JSON.parse(localStorage.getItem('list'));
  getfromStorage = getfromStorage.filter((el) => el.completed === false);
  localStorage.setItem('list', JSON.stringify(getfromStorage));
}

// checkbox

function checkListBox(Id, comp) {
  const getfromStorage = JSON.parse(localStorage.getItem('list'));
  getfromStorage.forEach((el) => {
    if (el.index === Id) {
      el.completed = comp;
    }
  });

  localStorage.setItem('list', JSON.stringify(getfromStorage));
}

module.exports = { editElement, clearList, checkListBox };
