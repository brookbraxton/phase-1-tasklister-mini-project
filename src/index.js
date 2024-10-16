document.addEventListener("DOMContentLoaded", () => {
  // your code here
 // Select the form and tasks list elements
const form = document.getElementById('create-task-form');
const tasksList = document.getElementById('tasks');

/**
 * Handles the form submission event.
 * @param {Event} event - The submit event object.
 */
function handleFormSubmit(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Retrieve the task description and priority
  const taskInput = document.getElementById('new-task-description');
  const prioritySelect = document.getElementById('task-priority');
  
  const taskDescription = taskInput.value.trim();
  const taskPriority = prioritySelect.value;

  // Clear the input fields
  taskInput.value = '';
  prioritySelect.value = 'Medium';

  // Proceed only if the task description is not empty
  if (taskDescription !== '') {
    addTaskToDOM(taskDescription, taskPriority);
  }
}

/**
 * Creates a new task element and appends it to the tasks list.
 * @param {string} task - The task description.
 * @param {string} priority - The task priority level.
 */
function addTaskToDOM(task, priority) {
  // Create a new list item
  const li = document.createElement('li');
  li.classList.add(priority.toLowerCase()); // Add class based on priority

  // Create a span to hold the task description
  const taskSpan = document.createElement('span');
  taskSpan.textContent = task;

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  
  // Attach an event listener to the delete button
  deleteBtn.addEventListener('click', () => {
    tasksList.removeChild(li);
  });

  // Append the span and delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Append the list item to the tasks list
  tasksList.appendChild(li);
}

// Attach the submit event listener to the form
form.addEventListener('submit', handleFormSubmit);
});
