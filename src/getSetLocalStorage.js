// const LIST = JSON.parse(localStorage.getItem('list')) || [];
const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('list')) || [];
// const getDataFromLocalStorage = () => LIST;

const setDataToLocalStorage = (el) => {
  // set the index and let it match using the key index value
  el.forEach((k, v) => {
    k.index = v + 1;
  });
  localStorage.setItem('list', JSON.stringify(el));
};

export { setDataToLocalStorage, getDataFromLocalStorage };