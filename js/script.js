
const output_message = document.getElementById("output_message");

function addTask(){
    open_output_message();
}

function open_output_message(){
    output_message.classList.replace("closed", "opened");
}

function close_output_message(){
    output_message.classList.replace("opened", "closed");
}