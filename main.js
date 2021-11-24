const input = document.querySelector(".input-box__text");
const submitBtn = document.querySelector(".input-box__submitBtn");
const resetBtn = document.querySelector("#reset-btn");
const output = document.querySelector(".task__bar");

// store the task input into an array
let tasks = [];

// Once submitted, input value will be stored in the array
const recieveTask = () =>{
  let inputTask = input.value;
  tasks.push(inputTask);
  console.log(tasks)
}

// Print Task onto the HTML in div
const printTask = () =>{
  output.innerHTML += `<div>
  <input type="checkbox"/>${output.innerHTML = tasks}
  <i class="fas fa-pencil-alt"></i>
  </div>
  `
  // After printing one, clear the array so the second task 
  // won't clash with the first
  tasks=[];
    

}





// Trigger event
submitBtn.addEventListener("click",recieveTask)
submitBtn.addEventListener("click",printTask)