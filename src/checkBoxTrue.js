export default function checkListBox(Id, comp) {
  const getfromStorage = JSON.parse(localStorage.getItem('list'));
  getfromStorage.forEach((el) => {
    if (el.index === Id) {
      el.completed = comp;
    }
  });

  localStorage.setItem('list', JSON.stringify(getfromStorage));
}
