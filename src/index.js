// ----------------- Import Required Elements
import taskList from './modules/taskarray.js';
import * as element from './modules/elements.js';
import * as taskFunction from './modules/functions.js';

// ----------------- Collect data from Local Storage
const store = localStorage.getItem('listOfTasks');

if (store) {
  taskList.push(...JSON.parse(store));
} else {
  taskList; // eslint-disable-line
}

// ------------------ Load Avaliable Tasks
taskFunction.reloadTask();

// ------------------ Event Listener for Add Button
element.addBtn.addEventListener('click', () => {
  const input = element.userInput.value;
  const comp = 'false';
  const index = taskList.length;
  taskFunction.addTask(input, comp, index);
  taskFunction.loadTask(index);
  localStorage.setItem('listOfTasks', JSON.stringify(taskList));
});

// --------------------- Event Listener to Remove Button
element.taskContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remBtn')) {
    const taskCon = e.target.parentElement;
    const taskIndex = taskList.findIndex((t) => t.a === taskCon.querySelector('.task-item').innerText);
    taskFunction.deleteTask(taskIndex);
    element.taskContainer.removeChild(taskCon);
    taskFunction.refreshIndex();
    localStorage.setItem('listOfTasks', JSON.stringify(taskList));
  }
});
