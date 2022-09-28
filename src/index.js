// import _ from 'lodash';
import './style.css';

// Selection of Required Elements
const todoList = document.querySelector('#display-tasks');

// Create Array to Populate DOM
const taskList = [{
  didComplete: 'false',
  task: 'Clean My Room',
  number: 0,
},
{
  didComplete: 'false',
  task: 'Feed the Chickens',
  number: 1,
},
{
  didComplete: 'false',
  task: 'Finish Yesterday"s Project',
  number: 2,
},
{
  didComplete: 'false',
  task: 'Wash dirty clothes',
  number: 3,
},
{
  didComplete: 'false',
  task: 'Cook',
  number: 4,
},
{
  didComplete: 'false',
  task: 'Watch todays Game',
  number: 5,
},
];

// Populate Task Section
function populate() {
  for (let index = 0; index < taskList.length; index++) { // eslint-disable-line
    todoList.innerHTML += `<div id="shell">
      <input type="checkbox" id="check"/>
      <p id="task">${taskList[index].task}</p>
      <button id="del-list">Remove</button>
      </div>`;
  }
}

// Call the function
populate();
