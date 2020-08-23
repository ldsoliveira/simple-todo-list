export const DeleteBtn = () => {
    const deleteBtn = document.createElement('button');

    deleteBtn.classList.add('check-button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    return deleteBtn;
}

const deleteTask = event => {
    const deleteBtn = event.target;

    const task = deleteBtn.parentElement;

    task.remove();
}

export default DeleteBtn;