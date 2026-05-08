//ADD TASK
const task_title = document.getElementById("task_title");
const task_description = document.getElementById("task_description");

//OUTPUT MESSAGE
const output_message = document.getElementById("output_message");

function addTask() {
  let title = task_title.value;
  let description = task_description.value;
  let id = localStorage.length - 1;
  let spliter = "!";
  let value = title + spliter + description;

  if (title !== "" && description !== "") {
    localStorage.setItem(id, value);
    console.log("Id: " + id);
    console.log("Value: " + value);
    task_title.value = "";
    task_description.value = "";
    output_message.innerHTML = "Tarefa adicionada!";
  } else {
    if (title === "" && description === "") {
      output_message.innerHTML =
        "Você deve adicionar um título e uma descrição!";
    } else if (title === "") {
      output_message.innerHTML = "Você deve adicionar um título!";
    } else if (description === "") {
      output_message.innerHTML = "Você deve adicionar uma descrição!";
    }
  }
  open_output_message();
}

function open_output_message() {
  output_message.classList.replace("closed", "opened");
}

function close_output_message() {
  output_message.classList.replace("opened", "closed");
}

//THEMES
const root = document.documentElement;
const nav_theme_button = document.getElementById("nav-theme-button");
const nav_add_button = document.getElementById("nav-add-button");
const nav_tasks_button = document.getElementById("nav-tasks-button");

updateTheme();

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
