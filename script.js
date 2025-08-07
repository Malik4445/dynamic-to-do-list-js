document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText !== "") {
            // Task Creation and Removal
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            removeBtn.onclick = function() {
                // Remove task from DOM
                taskList.removeChild(listItem);

                // Remove task from Local Storage
                let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks = storedTasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            };

            listItem.appendChild(removeBtn);
            taskList.appendChild(listItem);

            // Clear the task input field only when adding from user input
            if (save) {
                taskInput.value = '';
            }

            // Save the new task to Local Storage
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

        } else if (save) {
            alert('Please enter a task.');
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Invoke loadTasks on page load
    loadTasks();
});