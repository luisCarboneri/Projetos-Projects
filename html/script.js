console.log("JavaScript funcionando!");
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();  // Corrigido para 'value'
    if (taskText === "") return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerText = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Concluir';
    completeBtn.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');  // Corrigido o nome da variável
    deleteBtn.innerText = 'Excluir';
    deleteBtn.onclick = () => {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Limpa o campo de entrada
}