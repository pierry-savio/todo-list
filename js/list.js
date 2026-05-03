if (localStorage.getItem(0) === null){
  cleanList();
}

function cleanList(){
  localStorage.clear();
  const tasks_container = document.getElementById("tasks-container");
  tasks_container.innerHTML = "";
}

function loadTasks(){
  for (let i = 0; i<localStorage.length; i++){
    let value = localStorage.getItem(i);
    console.log("value: " + value);
    const spliter = value.indexOf("!");
    const title    = value.slice(0, spliter);
    const description = value.slice(spliter + 1);
    newTask(i, title, description);
  }
}

loadTasks();

function newTask(id, title, description){
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

    tasks_container = document.getElementById("tasks-container");
    tasks_container.appendChild(task);
}

function clickTask(id){
  let task = document.getElementById("task-" + id);
  let description = document.getElementById("description-" + id);
  let description_button = document.getElementById("description_button-" + id);
  
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

function checkTask(id){
  let task = document.getElementById("task-" + id);
  task.innerHTML = "";
  localStorage.removeItem(id);
}