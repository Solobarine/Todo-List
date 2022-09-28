// import _ from 'lodash';
import './style.css';

// Selection of Required Elements
const todoList = document.querySelector('#display-tasks');

// Create Array to Populate DOM
const taskList = [{
  completed: 'false',
  description: 'Clean My Room',
  index: 0,
},
{
  completed: 'false',
  description: 'Feed the Chickens',
  index: 1,
},
{
  completed: 'false',
  description: 'Finish Yesterday"s Project',
  index: 2,
},
{
  completed: 'false',
  description: 'Wash dirty clothes',
  index: 3,
},
{
  completed: 'false',
  description: 'Cook',
  index: 4,
},
{
  completed: 'false',
  description: 'Watch todays Game',
  index: 5,
},
];

// Populate Task Section
function populate() {
  for (let index = 0; index < taskList.length; index++) { // eslint-disable-line
    todoList.innerHTML += `<div id="shell">
      <input type="checkbox" id="check"/>
      <p id="task">${taskList[index].description}</p>
      <button id="del-list">Remove</button>
      </div>`;
  }
}

// Call the function
populate();
