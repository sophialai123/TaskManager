//create a taskManager class
class TaskManager {
  constructor() {
    this.id = 0;
    this.taskList = [];
    this.checkCache();
  }

  //check if localsroge has data
  checkCache() {
    //console.log("Checking if anything is in the cache")
    let cache = localStorage.getItem("storedTasks")
    if (cache) {
      let tasks = JSON.parse(cache)
      //console.log(tasks)
      tasks.forEach((task) => {
        this.addTask(task.name, task.description, task.assignedTo, task.dueDate, task.status)
      })
    }
  }

  //update localStorage Data
  updateCache() {
    localStorage.setItem("storedTasks", JSON.stringify(this.taskList))
  }

  //add task value in the object
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.id++,
      name,
      description,
      assignedTo,
      dueDate,
      status
    }
    //push all the task in the array
    this.taskList.push(task)
    //call the render method
    this.render(task)
    //update value for the localStorage in the array
    this.updateCache()

  }

  //display the task object
  render(task) {
    htmlDivs(task)
  }


  editTask(id, status) {
    for (let i = 0; i < this.taskList.length; i++) {
      //let editBtn = document.querySelector('.btn-secondary')
      if (this.taskList[i].id === id) {
        console.log("Found the index of the task wanted: ", i);

        console.log(this.taskList[i].status = status)


        // //update the localstorage
        this.updateCache();
      }
    }
  }


  // Explicitly splices out the selected task from the 'tasks' array
  //not working yet
  deleteTask(id) {
    for (let i = 0; i < this.taskList.length; i++) {
      if (this.taskList[i].id === id) {
        console.log("Found the index of the task wanted: ", i)
        this.taskList.splice(i, 1)
        //update the localstorage
        this.updateCache();
      }
    }
  }

}

//create html 
const createHtmlTask = (task) => {
  //return an object
  return (
    `
          <div class="card mb-3">
          <!-- <labtimeDivfor="">Task Name: </label> -->
            <h5 class="card-header text-center fw-bold text-success">${task.name}</h5>
            <div class="card-body border">
              <div class="mb-3 ">
              <!--  <labtimeDivclass="form-control for="">Assigned to: </label>-->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Assigned to: ${task.assignedTo}"readonly></textarea>
            </div>
            <div class="mb-3">
            <!-- <labtimeDivfor="">Due Date: </label> -->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Due Date: ${task.dueDate}"readonly></textarea>
            </div>
            <div class="mb-3 ">
            <!-- <labtimeDivfor="">Description:</label>-->
              <textarea class="form-control" id="" cols=" 30" rows="3" placeholder="Description: ${task.description}"readonly></textarea>
            </div> 
            <!-- Edit buttons -->
          </div>  
         </div >  
        `
  )

}


//divs will be added based on task status
const htmlDivs = (task) => {
  let divBtnHtmlId
  switch (task.status) {
    case "Todo":
      divBtnHtmlId = 'todo';
      break
    case "Progress":
      divBtnHtmlId = 'progress';
      break
    case "Review":
      divBtnHtmlId = 'review';
      break
    case "Done":
      divBtnHtmlId = 'done';
      break
  }

  //the whole div of each task
  const div = document.createElement('div');
  div.innerHTML = createHtmlTask(task);



  const lastBtnDiv = document.createElement("div");
  lastBtnDiv.className = 'd-flex gap-3 justify-content-center mb-3';

  div.appendChild(lastBtnDiv)



  //edit button

  let editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  editBtn.className = 'btn btn-outline-secondary';
  editBtn.style.color = "black"
  editBtn.addEventListener('click', (e) => {
    //call calss delete method

  })



  //create todo button
  let todoBtn = document.createElement('button');
  todoBtn.innerHTML = "Todo";
  todoBtn.className = 'btn btn-outline-info';
  todoBtn.addEventListener('click', (e) => {
    if (todoBtn.innerHTML = "Todo") {
      document.getElementById('todo').appendChild(div);
    }
    taskPlanner.editTask(task.id, "Todo");
    taskPlanner.updateCache()
  })

  //create Progress button
  let ProgressBtn = document.createElement('button');
  ProgressBtn.innerHTML = "Progress";
  ProgressBtn.className = 'btn btn-outline-primary';
  ProgressBtn.addEventListener('click', (e) => {
    if (ProgressBtn.innerHTML = "Progress") {
      document.getElementById('progress').appendChild(div);
    }
    taskPlanner.editTask(task.id, "Progress");
    taskPlanner.updateCache()
  })

  //create Review button
  let reviewBtn = document.createElement('button');
  reviewBtn.innerHTML = "Review";
  reviewBtn.className = 'btn btn-outline-warning';
  reviewBtn.addEventListener('click', (e) => {

    if (reviewBtn.innerHTML = "Review") {
      // reviewBtn.innerHTML = "Mark as Review"
      document.getElementById('review').appendChild(div);
    }
    taskPlanner.editTask(task.id, "Review");
    taskPlanner.updateCache()
  })

  //create done button
  let doneBtn = document.createElement('button');
  doneBtn.innerHTML = "Done";
  doneBtn.className = 'btn btn-outline-success';
  doneBtn.addEventListener('click', (e) => {

    if (doneBtn.innerHTML = "Done") {
      document.getElementById('done').appendChild(div);
    }
    taskPlanner.editTask(task.id, "Done");

  })




  //Create deletebutton
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.className = 'btn btn-outline-danger';
  deleteBtn.style.color = "black"
  deleteBtn.addEventListener('click', (e) => {
    //call calss delete method
    taskPlanner.deleteTask(task.id)
    //remove the html element on the page
    div.remove()
  })

  div.appendChild(deleteBtn)
  lastBtnDiv.append(editBtn, todoBtn, ProgressBtn, reviewBtn, doneBtn, deleteBtn)

  //add the div based on the statas Id
  return document.getElementById(divBtnHtmlId).appendChild(div)
}




const displayDateTime = () => {
  const timeDiv = document.getElementById('time');
  setInterval(function () {
    let currentTime = new Date();
    let dayArr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let monthArr = new Array("January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "Novermber", "December");
    let day = currentTime.getDay();
    let month = currentTime.getMonth();
    let date = currentTime.getDate();
    let year = currentTime.getFullYear();
    let time = currentTime.toLocaleTimeString()
    timeDiv.innerHTML = `${dayArr[day]} ${date} ${monthArr[month]} ${year} ${time}`
  }, 1000);
};

displayDateTime()
