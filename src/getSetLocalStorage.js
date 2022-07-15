export const getDataFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('list'))|| [];
}

export const setDataToLocalStorage = (el) => {
    //set the index and let it match using the key index value
    el.forEach((k,v)=> {
        k.index = v + 1;
    })
    localStorage.setItem('list', JSON.stringify(el));
}