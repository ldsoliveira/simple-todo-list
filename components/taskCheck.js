const CheckBtn = () => {
    const checkBtn = document.createElement('button');

    checkBtn.classList.add('check-button');
    checkBtn.innerText = 'Done';
    checkBtn.addEventListener('click', completeTask);

    return checkBtn;
}

const completeTask = event => {
    const checkBtn = event.target;

    const task = checkBtn.parentElement;

    task.classList.toggle('done');
}

export default CheckBtn;