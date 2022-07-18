export default function editElement() {
  const getfromStorage = JSON.parse(localStorage.getItem('list'));
  const Id = Number(this.id);
  const { value } = this;
  getfromStorage[Id - 1].description = value;
  localStorage.setItem('list', JSON.stringify(getfromStorage));
}