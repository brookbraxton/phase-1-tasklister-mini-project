document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const tasklist = document.getElementById('tasks');
  const priorityMap ={
    low:'black',
    medium:'blue',
    high:'red',
  };

  const tasks = [];

  form.addEventListener('submit', (event) =>{
   event.preventDefault();

   const taskDescription = document.getElementById('new-task-description').value;
   const priority = document.getElementById('priority').value;
   const user = document.getElementById('user').value;
   const dueDate = document.getElementById('due-date').value;


  const task ={
        description: taskDescription,
        priority: priority,
        user: user,
        dueDate: dueDate,
  };
   
   task.push(task);
   displayTasks();
   form.reset()
  });

   function displayTasks() {
  taskList.innerHTML = '',
  tasks.forEach((task, index) =>{
    const li = document.createElement('li');
    li.textContent = `${task.description} (Assigned to: ${task.user}, Due:())`
    li.style.color = priorityMap[task.priority];

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click',() => editButton(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
     taskList.appendChild(li);
  });
 }

   function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
   }
   
   function editTasks() {
    const task = tasks[index];
    document.getElementById('new-task-description').value = task.description;
    document.getElementById('priority').value = task.priority;
    document.getElementById('user').value = task.user;
    document.getElementById('due-date').value = task.dueDate;

    deleteTask(index);
   }
   });


