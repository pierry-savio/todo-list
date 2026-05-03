//ADD TASK
const task_title = document.getElementById("task_title");
const task_description = document.getElementById("task_description");

//OUTPUT MESSAGE
const output_message = document.getElementById("output_message");

function addTask(){
    let title = task_title.value;
    let description = task_description.value;
    let id = localStorage.length;
    let spliter = "!";
    let value = title + spliter + description;

    if (title !== "" && description !== ""){
        localStorage.setItem(id, value);
        console.log("Id: " + id);
        console.log("Value: " + value);
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