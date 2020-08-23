import CheckBtn from './components/taskCheck.js';
import DeleteBtn from './components/taskDelete.js';

const createTask = event => {

    event.preventDefault();
    var input = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');

    task.classList.add('task');
    task.innerHTML = `<p class="content">${input.value}</p>`;
    list.appendChild(task);
    task.appendChild(CheckBtn());
    task.appendChild(DeleteBtn());

    input.value = "";
    input.focus();

}

const inputBtn = document.querySelector('[data-form-button]');

inputBtn.addEventListener('click', createTask);

