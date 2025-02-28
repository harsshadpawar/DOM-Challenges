const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const noTasksMessage = document.getElementById("noTasksMessage");
const totalTasksCount = document.getElementById("totalTasks");
const completedTasksCount = document.getElementById("completedTasks");

let tasks = [];

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    taskInput.style.borderColor = "#ef476f";
    return;
  }

  const task = {
    id: Date.now(), // Unique ID
    text: taskText,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
  updateTaskStats();
  taskInput.focus();
}

// Function to toggle task completion
function toggleTaskCompletion(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  updateTaskStats();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  renderTasks();
  updateTaskStats();
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    noTasksMessage.style.display = "block";
  } else {
    noTasksMessage.style.display = "none";

    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("task-checkbox");
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));

      const taskText = document.createElement("span");
      taskText.classList.add("task-text");
      taskText.textContent = task.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => deleteTask(task.id));

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    });
  }
}

function updateTaskStats() {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  totalTasksCount.textContent = totalTasks;
  completedTasksCount.textContent = completedTasks;
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

taskInput.addEventListener("input", () => {
  taskInput.style.borderColor = "";
});

renderTasks();
updateTaskStats();
