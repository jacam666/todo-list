Your 'toDos' are going to be an array of objects that you'll want to dynamically create, which means either using factories or constructors/classes to generate them.

How to start??

Once a new task is added, we’ll create a new todo object, push it into the array and render the value of the text property on the screen.

The first thing we need to do is to create an array where we’ll place the todo list items.

Each todo item will be an object with three properties: text, a string which holds whatever the user types into the text input, checked, a boolean which helps us know if a task has been marked completed or not, and id, a unique identifier for the item

create a function (factory function) called addTodo that will : create the toDo object, and push this toDo in our todoItems array.

Note:

the text value will be passed as a parameter. while checked should be false by default, and id should be any unique value (see Date.now()).

console.log your todoItems array.

Now we will add the task:

Let’s start by adding a todo item to our list. To do so, we need to listen for the click event on the Add button element, and then invoke a new addTodo() function when the button is clicked.

Add a click event-listener to your button, when the button is clicked.

Take the task text from the input field.

check if the task is empty or not.

If it is empty then alert the user ("Please add something).

if not, add the task object in the todoItems array Hint: you can do this by calling the addTod function.

Clear the value of the text input after adding the task. (think what value should be added to clear it)

focus the text field so that the user can add multiple items to the list without having to focus the input over and over again. Hint: search about Input Text focus() Method,to know what is it.

Finally, the task is pushed to the todoItems array, and the array is logged to the console.

Render the todo items:

Once a new todo item is added to the todoItems array, we want the app to be updated with the item rendered on the screen.

to do that:

create a function called renderToDo,that take the text as a parameter.
Create a new task (HTML element)
element, that contains the entered text. Hint: use createElement method
Add the task to the unordered list. Hint: you can use the appendChild method.
add the renderTodo() function above addTodo(),and call it in the addTodo().
finally invoke(call) your renderTodo function in the addTodo function,so it will be invoked each time a new todo item is added.
Remove the last added todo items:

Using javascript create a button called remove in the first input-container div.
Add a click event listener to the button.
Remove the last added Todo when you click the button.
Do not forget to check if we have tasks or not, and alert the user if we do not.

Extra credit:
Let’s add more features to our app:

When you add a task, add a checkbox in front of each one.
Add an event-listener on your checkbox that will mark your task as completed(strikeThrough task) when checked.
Add a remove button for each task.
Add an event listener on this button that will remove that task when clicked and update the DOM.
Create a new button that will remove the completed tasks only whenever the button is clicked.
Try to figure out a way to edit the tasks, it's up to you how to do so.
