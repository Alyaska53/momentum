let todoActive = {};

const todoBtn = document.querySelector('.todo-btn');
const todoContainer = document.querySelector('.todo-container');
const todoEnter = document.querySelector('.todo-enter');
const todoList = document.querySelector('.todo-list');
const todoCloseBtn = document.querySelector('.todo-close-btn');

todoCloseBtn.addEventListener('click', () => {
  todoContainer.classList.toggle('todo-visible');
});

function showToDo() {
  event.stopPropagation();
  todoContainer.classList.toggle('todo-visible');
}

document.addEventListener("click", () => {
  if (!todoContainer.contains(event.target) && todoContainer.classList.contains('todo-visible')) {
    showToDo();
  }
});

todoBtn.addEventListener('click', () => {
  showToDo();
});

function newTask() {
  if(event.key === 'Enter' && this.value) {
    todoActive[createTask(this.value)] = this.value;
    saveToStorage();
    this.value = '';
  }
}

function createTask(text, id = '') {
  id = id ? id : "id" + Math.random().toString(16).slice(2);
  const li = document.createElement('li');
  li.classList.add('todo-item')
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('checkbox');
  input.id = id;
  const label = document.createElement('label');
  label.classList.add('todo-text');
  label.innerHTML = text;
  label.setAttribute('for', id);
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('todo-delete');
  deleteBtn.setAttribute("data-id", id);
  deleteBtn.addEventListener('click', deleteTask);
  li.append(input);
  li.append(label);
  li.append(deleteBtn);
  todoList.append(li);
  return id;
}

function deleteTask() {
  event.stopPropagation();
  event.target.parentElement.remove();
  delete todoActive[event.target.dataset.id];
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoActive));
}

function restoreTodoFromStorage() {
  let todos = localStorage.getItem('todoList');
  if (todos !== null && todos !== "{}") {
      todoActive = JSON.parse(todos);

      for (let key in todoActive) {
        createTask(todoActive[key], key);
      }
  }
}

function removeExample() {
  document.querySelector('.todo-item').remove();
}

todoEnter.addEventListener('keydown', newTask);
restoreTodoFromStorage();