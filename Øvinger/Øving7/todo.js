document.getElementById("submitButton").addEventListener("click", addTask);
let tasks = [];
let ulTag = document.getElementById("todoList");
let totalNumberTask = 0;
let totalCompletedTask =0;

function addTask(event){
    let inputText = document.getElementById("inputField").value;
    
    let millisec = new Date();
    let day  = millisec.getDate();
    
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
    totalNumberTask = tasks.length;
    
    addToOutputField(totalCompletedTask,totalNumberTask);
}



function addOrRemoveLine(id){
    let tempObj = document.getElementById(id);
    if(tempObj.checked){
        tempObj.style.textDecoration = "line-through";
        totalCompletedTask++;
    }else{
        tempObj.style.textDecoration = "none";
        totalCompletedTask--;
    }
    addToOutputField(totalCompletedTask,totalNumberTask);
}

function addToOutputField(numberTask,completeTask){
    document.getElementById("outputField").value = numberTask +"/" +completeTask+" completed";
}






