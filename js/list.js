if (localStorage.getItem(0) === null){
  cleanList();
}

function cleanList(){
  localStorage.clear();
  const tasks_container = document.getElementById("tasks-container");
  const button_icon_container = document.getElementById("button-icon-container");
  const empty_list_message = document.getElementById("empty-list-message");

  if (tasks_container){
    tasks_container.remove();
  }

  button_icon_container.classList.replace("opened", "closed");
  empty_list_message.classList.replace("closed", "opened");
}

function loadTasks(){
  for (let i = 0; i<localStorage.length; i++){
    if (localStorage.getItem(i) !== "dark" || localStorage.getItem(i) !== "light"){
      let value = localStorage.getItem(i);
      console.log("value: " + value);
      const spliter = value.indexOf("!");
      const title    = value.slice(0, spliter);
      const description = value.slice(spliter + 1);
      newTask(i, title, description);
    }
  }
}

loadTasks();

function newTask(id, title, description){
  
  let tasks_container = document.getElementById("tasks-container");

  if (!tasks_container){
    tasks_container = document.createElement("div");
    tasks_container.innerHTML = `<div class="tasks-container" id="tasks-container"`;
  }

  let task = document.createElement("div");
  
  task.className = "task opened";

  task.innerHTML =
  
    `<div class="task closed" onclick="clickTask(${id})" id="task-${id}">
      
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

function clickTask(id){
  let task = document.getElementById("task-" + id);
  let description = document.getElementById("description-" + id);
  let description_button = document.getElementById("description_button-" + id);
  
  if (task){
    if (task.classList.contains("closed")){
      task.classList.replace("closed", "opened");
      description.classList.replace("closed", "opened");
      description_button.src = "./icons/opened.png";
    }
    else{
      task.classList.replace("opened", "closed");
      description.classList.replace("opened", "closed");
      description_button.src = "./icons/closed.png";
    }
  }
}

function checkTask(id){
 
  const button_icon_container = document.getElementById("button-icon-container");
  const empty_list_message = document.getElementById("empty-list-message");

  let task = document.getElementById("task-" + id);
  task.innerHTML = "";
  task.remove();
  localStorage.removeItem(id);

  let tasks_container = document.getElementById("tasks-container");

  if (localStorage.length < 1 && tasks_container){
    tasks_container.remove();
    button_icon_container.classList.replace("opened", "closed");
    empty_list_message.classList.replace("closed", "opened");
  }
}

const root = document.documentElement;
const nav_theme_button = document.getElementById("nav-theme-button");
const nav_add_button = document.getElementById("nav-add-button");
const nav_tasks_button = document.getElementById("nav-tasks-button");

if (localStorage.getItem("theme") === "dark") {
    root.classList.add("dark");
    nav_theme_button.src = "./icons/sun-white.png";
    nav_add_button.src = "./icons/plus-white.png";
    nav_tasks_button.src = "./icons/paper-white.png";
} else {
    root.classList.remove("dark");
    nav_theme_button.src = "./icons/moon.png";
    nav_add_button.src = "./icons/plus.png";
    nav_tasks_button.src = "./icons/paper.png";
}

function turnTheme() {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    root.classList.remove("dark");
    nav_theme_button.src = "./icons/moon.png";
    nav_add_button.src = "./icons/plus.png";
    nav_tasks_button.src = "./icons/paper.png";
  } else {
    localStorage.setItem("theme", "dark");
    root.classList.add("dark");
    nav_theme_button.src = "./icons/sun-white.png";
    nav_add_button.src = "./icons/plus-white.png";
    nav_tasks_button.src = "./icons/paper-white.png";
  }
}