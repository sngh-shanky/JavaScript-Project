const inputBox = document.getElementById('input-box');
const listConatiner = document.getElementById('list-container')


function addTask(){
if(inputBox.value === ''){
    alert("You must enter something!!")
}else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listConatiner.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}
inputBox.value = '';
showData();
}

listConatiner.addEventListener('click',(e)=>{
console.log(e.target)
if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    showData()
}else if(e.target.tagName === "SPAN"){
 e.target.parentElement.remove()
 showData()
}
},false
);

function showData(){
    localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}

showTask()
