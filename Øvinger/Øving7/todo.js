document.getElementById("submitButton").addEventListener("click", addTask);

function addTask(event){
    let inputText = document.getElementById("inputField").value;
    //Adds only non-empty strings to the list
    if(inputText.trim()!=""){
        let ul = document.getElementById("todoList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(inputText));
        ul.appendChild(li);
        event.preventDefault();
    }
}