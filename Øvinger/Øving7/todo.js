document.getElementById("submitButton").addEventListener("click", addTask);

const tasks = [];
const ulTag = document.getElementById("todoList");
let numberOfTask = 0;
let completedTask =0;

function addTask(event){
    const inputText = document.getElementById("inputField").value;

    const millisec = new Date();
    const day  = millisec.getDate();

    let taskObj =  {
        task : inputText,
        date : day
    };

    tasks.push(taskObj);

    //Using String manipulations to create listelements.
    ulTag.style.listStyle="none";
    let tags="";
    for(let i = tasks.length-1; i>=0;i--){
        tags+=`<li><input type="checkbox" id=${i} onclick="addOrRemoveLine(this.id)">${tasks[i].task}</li>`;
    }
    ulTag.innerHTML = tags;
    event.preventDefault();
    numberOfTask = tasks.length;

    addToOutputField(completedTask,numberOfTask);

    document.getElementById("inputField").value = ""; //clears the field
}



function addOrRemoveLine(id){
  //console.log(id);
    const tempCheckbox = document.getElementById(id);
    const liElement = tempCheckbox.parentElement;
    if(tempCheckbox.checked){
        liElement.style.textDecoration = "line-through";
        completedTask++;
    }else{
        liElement.style.textDecoration = "none";
        completedTask--;
    }
    addToOutputField(completedTask,numberOfTask);
}

function addToOutputField(numberTask,completeTask){
    document.getElementById("outputField").value = numberTask +"/" +completeTask+" completed";
}
