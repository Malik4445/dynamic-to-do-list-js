document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== "") {
            // Task Creation and Removal
            // Create a new li element
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeBtn.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Append the remove button to the li element
            listItem.appendChild(removeBtn);

            // Append the li to taskList
            taskList.appendChild(listItem);

            // Clear the task input field
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Attach Event Listeners
    // Add an event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for 'keypress'
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});