
localStorage.setItem("theme", "light");

//ADD TASK
const task_title = document.getElementById("task_title");
const task_description = document.getElementById("task_description");

//OUTPUT MESSAGE
const output_message = document.getElementById("output_message");


//THEME
let theme = localStorage.getItem("theme");

function addTask(){
    let title = task_title.value;
    let description = task_description.value;
    let id = localStorage.length;
    let spliter = "!";
    let value = title + spliter + description;

    if (title !== "" && description !== ""){
        localStorage.setItem(id, value);
        task_title.value = "";
        task_description.value = "";
        output_message.innerHTML = "Tarefa adicionada!";
    }
    else{
        if (title === "" && description === "") {
            output_message.innerHTML = "Você deve adicionar um título e uma descrição!";
        }
        else if (title === ""){
            output_message.innerHTML = "Você deve adicionar um título!";
        }
        else if (description === ""){
            output_message.innerHTML = "Você deve adicionar uma descrição!";
        }
        
    }
    open_output_message();
}

function open_output_message(){
    output_message.classList.replace("closed", "opened");
}

function close_output_message(){
    output_message.classList.replace("opened", "closed");
}

//LIGHT/DARK MODE
function changeTheme(){

    const header = document.getElementById("header");
    
    if (localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme", "dark");
        document.querySelectorAll("*").forEach(element => {
            element.classList.add("dark");
            element.classList.remove("light");
        });
    }
    else{
        localStorage.setItem("theme", "light");
        document.querySelectorAll("*").forEach(element => {
            element.classList.add("light");
            element.classList.remove("dark");
        });
    }
}