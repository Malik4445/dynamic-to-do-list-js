document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new li element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Add onclick event to remove button
            removeBtn.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the list item
            listItem.appendChild(removeBtn);

            // Append the new list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});