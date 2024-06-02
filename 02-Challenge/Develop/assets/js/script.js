//Todo: Create a function that generates a unique task id
function generateTask() {

    if(localStorage.getItem('nextId') === null){
        localStorage.setItem('nextId', 1);
        return 0;
    }
    
    let currentId = parseInt(localStorage.getItem('nextId'));
    localStorage.setItem('nextId', currentId + 1);
    return currentId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
