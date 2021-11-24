const input = document.querySelector(".input-box__text");
const submitBtn = document.querySelector(".input-box__submitBtn");
const resetBtn = document.querySelector("#reset-btn");
const output = document.querySelector(".task__bar");

// store the 
let tasks = [];

const recieveTask = () =>{
  let inputTask = input.value;
  tasks.push(inputTask);
  console.log(tasks)
}

const printTask = () =>{
  // for (let i = 0; i < tasks.length; i++){
  // console.log(tasks[i])
    //return `<div>${output.innerHTML = tasks[i]}</div>`
  
  output.innerHTML += `<div>
  <input type="checkbox"/>${output.innerHTML = tasks}
  <i class="fas fa-pencil-alt"></i>
  </div>
  `
  tasks=[];
  
  // }
    

}






submitBtn.addEventListener("click",recieveTask)
submitBtn.addEventListener("click",printTask)