

const task = document.getElementById("task1");
const description = document.getElementById("description");
const description_button = document.getElementById("description_button");

let taskState = 0;

function clickTask(){
    if (taskState == 0){
        task.classList.replace("closed", "opened");
        description.classList.replace("closed", "opened");
        
    }
    else{
        task.classList.replace("opened", "closed");
        description.classList.replace("opened", "closed");
        
    }

    if(taskState == 0){
        description_button.src = './icons/closed.png';
        taskState = 1;
    }
    else if (taskState == 1){
        description_button.src = './icons/opened.png';
        taskState = 0;
    }
}