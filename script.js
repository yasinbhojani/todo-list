const input = document.querySelector('.input');
const inputBtn = document.querySelector('.input-btn');
const list = document.querySelector('.list');
const delList = document.querySelector('.del-list');


//this is used to add a new task in the list of tasks.
inputBtn.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.append(li);
        input.value = '';
        addEvents(li);
    }
})

//this function is used to add and event listener to all the li's
function addEvents(listItem) {
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('strike');
    })
}

//this is used to delete all the tasks from the list
delList.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');

    for (let li of lis) {
        li.remove();
    }
})