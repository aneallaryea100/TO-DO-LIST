export default function clearList() {
  let getfromStorage = JSON.parse(localStorage.getItem('list'));
  getfromStorage = getfromStorage.filter((el) => el.completed === false);
  localStorage.setItem('list', JSON.stringify(getfromStorage));
}