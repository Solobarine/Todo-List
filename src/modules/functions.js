import taskList from './taskarray.js';
import * as element from './elements.js';

// Add Tasks to Array
export const addTask = (x, y, z) => {
  const obj = { a: x, b: y, c: z };
  taskList.push(obj);
};

// Load Tasks
export const loadTask = (i) => {
  element.taskContainer.innerHTML += `<div class="shell">
                                     <input type="checkbox" class="checkbox"/>
                                     <p class="task-item">${taskList[i].a}</p>
                                     <button class="remBtn" type="button">Remove</button>
                                     </div>`;
};

// Reload Tasks
export const reloadTask = () => {
  element.taskContainer.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    element.taskContainer.innerHTML += `<div class="shell">
                                     <input type="checkbox" class="checkbox"/>
                                     <p class="task-item">${taskList[i].a}</p>
                                     <button class="remBtn" type="button">Remove</button>
                                     </div>`;
  }
};

// Delete Task
export const deleteTask = (i) => {
  taskList.splice(i, 1);
};

// Reload Task
export const refreshIndex = () => {
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].c = i;
  }
};
