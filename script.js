document.addEventListener('DOMContentLoaded', function () {
         const taskInput = document.getElementById("taskInput");
         const addTask = document.getElementById("addTask");
         const taskList = document.getElementById("tasks");
         const clearButton = document.getElementById('clearButton')
         const noTasksMessage = document.getElementById('noTasksMessage');

    loadTasks();

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach((task) => {
            displayTasks(task);
        });
    }

            addTask.addEventListener('click',function(){
            const taskTextValue = taskInput.value.trim();

            if(taskTextValue) {
                addTasks(taskTextValue);
                taskInput.value = '';
            }
                           
         });


         function addTasks(task) {
            const tasks = JSON.parse(localStorage.getItem('tasks'))|| [];
            tasks.push(task);
            localStorage.setItem('tasks',JSON.stringify(tasks))
            displayTasks(task);
            taskInput.value = '';
     
         }


        function displayTasks(task) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <input type="checkbox"  >  
                `  + task;
            
            taskList.appendChild(taskItem);
            noTasksMessage.style.display = 'none';
            clearButton.disabled = false;
        }


        function clearTasks() {
            taskList.innerHTML = '';
            noTasksMessage.style.display = 'block';
            clearButton.disabled = true; 
            localStorage.clear();
        }

        clearButton.addEventListener('click', clearTasks);

    });

    
    const inputFields = document.querySelectorAll('#taskInput');

inputFields.forEach(function(input) {
  input.addEventListener('focus', function () {
      input.style.outline = 'none' 
    input.style.border = '2px solid #be98e0'; 
  });

  input.addEventListener('blur', function () {
    input.style.border = ''; 
  });
});