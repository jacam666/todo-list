let todoItems = [];

function renderTodo(text) {
    const task = document.createElement('li'); //Create a new task (HTML element) <li> element, that contains the entered text.
    task.innerHTML += text;
    document.querySelector('ul').appendChild(task); //Add the task to the unordered list.

    const checkbox = document.createElement('input'); // creating the checkbox.
    checkbox.type = 'checkbox';
    task.appendChild(checkbox);
    checkbox.addEventListener('click', () => { ////Add a click event-listener to your checkbox.
        const checked = document.querySelector('ul').appendChild(task);
        if (checkbox.checked) {
            checked.style.setProperty("text-decoration", "line-through"); // adds a line though text when check box is checked.
        } else {
            checked.style.setProperty("text-decoration", "none"); // removes line through if unchecked.
        }
        });
        const removeTask = document.createElement('button');
        removeTask.type = 'button';
        removeTask.id = 'removeTask'; // added an id to the created element so i could style it differently to the remove button.
        removeTask.innerText = 'Remove task'; // button text.
        task.appendChild(removeTask);
    
        removeTask.addEventListener('click', () => { //Add an event listener on this button that will remove that task when clicked and update the DOM.
            //alert('Are you sure you want to remove this task?')
            const task = removeTask.parentNode; // Get the parent node of the removeTask button, which is the <li> element containing the task
            const taskList = task.parentNode; // Get the parent node of the task, which is the <ul> element
            taskList.removeChild(task); // Remove the task from the task list
            
    });

    const editTask = document.createElement('button');
    editTask.type = 'button';
    editTask.id = 'editTask';
    editTask.innerText = 'Edit';
    task.appendChild(editTask); 
}

function addTodo(text) {
    if (todoItems.length >= 20) {
        alert("You can't add more than 25 tasks!");
        return;
    }

    const toDo = {
        text: text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(toDo); // pushes the task to our array.
    renderTodo(text); // finally invoke(call) your renderTodo function in the addTodo function,so it will be invoked each time a new todo item is added
};

document.getElementById("inputTask").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById("addTask").click();
    }
})

const addButton = document.querySelector('#addTask');
addButton.addEventListener('click', () => { //Add a click event-listener to your button, when the button is clicked.
    const task = document.querySelector('#inputTask').value; // Take the task text from the input field
    if (task) {
    addTodo(task);// if not, add the task object in the todoItems array, **Hint**: you can do this by calling the addTod function.

    document.querySelector('#inputTask').value = ''; // Clear the value of the text input after adding the task.

    document.querySelector('#inputTask').focus(); //focus the text field so that the user can add multiple items to the list without having to focus the input over and over again.
    } else {
    alert('Please add something'); // If it is empty then alert the user ("Please add something).
    }
});

const inputContainer = document.querySelector('#input-container');
const remove = document.createElement('button'); // Using javascript create a button called remove in the first `input-container` div
remove.innerText = 'Remove'; // adding text onto the button.
inputContainer.appendChild(remove);
remove.addEventListener('click', () => { // Add a click event listener to the button.
    console.log(todoItems);
    if (todoItems.length > 0) { // if my array length is greater than 0.
        todoItems.pop(); // remove the last array entry
        const list = document.querySelector('ul'); 
        list.removeChild(list.lastChild); // removes the last array entry.
    }else {
        alert('There is nothing to remove'); // Do not forget to check if we have tasks or not, and alert user if there is nothing to remove.
    }
});


/* if(task > 25) {
            alert("You've entered too many tasks");
        } */