const taskInput = $('#task');
const descriptionInput = $('#description');
const datePickerInput = $('#datepicker');
const taskForm = $('#task-form');
const todoBox = $('#todo-cards');

// Creates an empty task list 
const taskList = [];

$( "#dialog" ).dialog({
    autoOpen: false,
    minHeight: 400,
    minWidth: 500,
  });

  datePickerInput.datepicker({
    changeMonth: true,
    changeYear: true,
  });


function handleFormSubmit(event){
  event.preventDefault()

    // Create a task-ID
    const taskId = generateTask();
    
    // create task object using form values
    const task = {
        id: taskId,
        name: taskInput.val(),
        date: datePickerInput.val(),
        description: descriptionInput.val()
    }

    const div = createTaskCard(task);
  
   todoBox.append(div);   
  $(`#task-${taskId}`) .draggable({ grid: [ 20, 20 ] })

    $('#dialog').dialog('close');
   // Should clear form 
   // todo: checkk why the form does not clear 
   // $('#dialog').find('form').reset();
}

$('#dialog').find('form').on('submit', handleFormSubmit);

// Generates a task ID
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
//const div =  $(`
// <div id="task-${task.id}" class="task-card">
//  <div class="task-title card-divs">
//    ${task.name}
//    <br>
//  </div>
//  <div class="task-content card-div">
//    ${task.date}
//    </br>
//    ${task.description}
//    <br>
//  </div>
//  <div class="card-divs">
//  <button> DELETE </button>
//  </div>
// </div>
//`)
const div = $(`

<div id="task-${task.id}" class=" card">
  <div class="card-body">
    <h5 class="card-title">${task.name}</h5>
    <p class="card-text">${task.date}</p>
    <p class="card-text">${task.description}</p>
    <button class="btn btn-primary"> DELETE </button>
  </div>
</div>

`)

return div;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    const taskId = generateTask();
    $( "#dialog" ).dialog( "open" );
 
    $( "#datepicker" ).datepicker({
     changeMonth: true,
     changeYear: true
   });
 
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

