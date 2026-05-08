//ELEMENTS
const tasks_container = document.getElementById("tasks-container");
const button_icon_container = document.getElementById("button-icon-container");
const empty_list_message = document.getElementById("empty-list-message");
const root = document.documentElement;
const nav_theme_button = document.getElementById("nav-theme-button");
const nav_add_button = document.getElementById("nav-add-button");
const nav_tasks_button = document.getElementById("nav-tasks-button");

updateTheme();

if (localStorage.length < 2) {
  if (tasks_container) {
    tasks_container.remove();
  }
  button_icon_container.classList.replace("opened", "closed");
  empty_list_message.classList.replace("closed", "opened");
}

function cleanList() {
  let theme = localStorage.getItem("theme");
  localStorage.clear();

  if (tasks_container) {
    tasks_container.remove();
  }
  button_icon_container.classList.replace("opened", "closed");
  empty_list_message.classList.replace("closed", "opened");

  localStorage.setItem("theme", theme);

  loadTasks();
}

function loadTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage.getItem(i);
    if (value !== null) {
      const spliter = value.indexOf("!");
      const title = value.slice(0, spliter);
      const description = value.slice(spliter + 1);
      newTask(i, title, description);
    }
  }
}

loadTasks();

function newTask(id, title, description) {
  if (!tasks_container) {
    tasks_container = document.createElement("div");
    tasks_container.innerHTML = `<div class="tasks-container" id="tasks-container"`;
  }

  let task = document.createElement("div");

  task.className = "task opened";

  task.innerHTML = `<div class="task closed" onclick="clickTask(${id})" id="task-${id}">
      
      <div class="task-header">

          <h2 class="task-title">
            ${title}
          </h2>

          <img src="./icons/check1.png" class="check-button" id="check-${id}" onclick="checkTask(${id})">

      </div>
      
      <p class="task-description closed" id="description-${id}">
        ${description}
      </p>

      <img src="./icons/closed.png" id="description_button-${id}" class="description-button">
  
    </div>`;

  tasks_container.appendChild(task);
}

function clickTask(id) {
  let task = document.getElementById("task-" + id);
  let description = document.getElementById("description-" + id);
  let description_button = document.getElementById("description_button-" + id);

  if (task) {
    if (task.classList.contains("closed")) {
      task.classList.replace("closed", "opened");
      description.classList.replace("closed", "opened");
      description_button.src = "./icons/opened.png";
    } else {
      task.classList.replace("opened", "closed");
      description.classList.replace("opened", "closed");
      description_button.src = "./icons/closed.png";
    }
  }
}

function checkTask(id) {
  let task = document.getElementById("task-" + id);
  task.innerHTML = "";
  task.remove();
  localStorage.removeItem(id);

  if (localStorage.length < 2 && tasks_container) {
    tasks_container.remove();
    button_icon_container.classList.replace("opened", "closed");
    empty_list_message.classList.replace("closed", "opened");
  }
}

//THEMES
function turnTheme() {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  updateTheme();
}

function updateTheme() {
  if (localStorage.getItem("theme") === "dark") {
    nav_theme_button.src = "./icons/sun-white.png";
    nav_add_button.src = "./icons/plus-white.png";
    nav_tasks_button.src = "./icons/paper-white.png";
    root.classList.add("dark");
  } else if (localStorage.getItem("theme") === "light") {
    nav_theme_button.src = "./icons/moon.png";
    nav_add_button.src = "./icons/plus.png";
    nav_tasks_button.src = "./icons/paper.png";
    root.classList.remove("dark");
  }
}

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}
