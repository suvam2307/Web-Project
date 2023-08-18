const inputBox=document.querySelector('#input-box');
const  listContainer=document.querySelector('#task-container');

const btnAddTask=document.querySelector("button");
btnAddTask.addEventListener('click',addTask);


//giving the enter event  listener to the input as user hit enter button then it will execute the function addTask
inputBox.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        addTask();
    }
    
});

function addTask(){
    if(inputBox.value==""){
        alert("Write something");
    }
    else{
        var li=document.createElement('li'); // creating a list of object
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); // as the listContainer is the parrent element then we append the child li new created element to it .
        let spn=document.createElement('span');
        spn.innerHTML="\u00d7";
        spn.className="span1";
        li.appendChild(spn);
    }

    inputBox.value='';// after we executing  all the task we reseting the value of inputBox
    saveData()
}

// adding the checked and delete task from the list container 
listContainer.addEventListener('click',function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle('checked');
        saveData()

    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData()
    }
},false);
//we will save all the list innerhtml and save in the localstorage.
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function getData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
getData()