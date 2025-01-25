// Example for project
const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(title, description, complete = false) {
  todos.push({ title, description, complete });
}

function removeTodo(title) {
  const index = todos.findIndex(todo => todo.title === title);
  if (index !== -1) {
    todos.splice(index, 1);
  }
}

function editTodo(oldTitle, newTitle, newDescription) {
  const todo = todos.find(todo => todo.title === oldTitle);
  if (todo) {
    todo.title = newTitle;
    todo.description = newDescription;
  }
}

function markTodoComplete(title) {
  const todo = todos.find(todo => todo.title === title);
  if (todo) {
    todo.complete = true;
  }
}

function displayTodoLength() {
  console.log(`You have ${todos.length} todos`);
}

function app() {
  console.log('Welcome to the Todo Application');
  console.log('ニニニニニニニニニニニニニニニニニニニニニニニニニニニニニニニニ');
  console.log('Here is a list of your todos:');

  // Adding todos
  removeTodo("Initial Todo");
  addTodo("Codewars", "Complete a codewars problem at codewars.com");
  addTodo("Resume review", "Go to Holly’s calendly and schedule a call", true);
  addTodo("JS project", "Follow a YouTube video to complete a JS tutorial");

  // Print the length of the todos array below this comment
  displayTodoLength();

  // Iterate over the todos array and console.log each todo below this comment
  todos.forEach(todo => {
    console.log(todo.title);
    console.log(`The title of the todo: ${todo.title}`);
    console.log(`The description of the todo: ${todo.description}`);
    console.log(`This todo is ${todo.complete ? "complete" : "not complete"}`);
  });
}

app();