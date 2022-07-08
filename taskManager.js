//create a calss

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

//divs will be added based on task status
const htmlDivs = (task) => {
  let divBtnHtmlId;
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

  const div = document.createElement('div');
  div.innerHTML = createHtmlTask(task);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add('btn');
  deleteBtn.classList.add('btn-danger')
  deleteBtn.addEventListener('click', (e) => {
    //call calss delete method
    taskPlanner.deleteTask(task.id)
    //remove the html element on the page
    div.remove()
  })
  div.appendChild(deleteBtn);

  //add the div based on the statas Id
  return document.getElementById(divBtnHtmlId).appendChild(div)
}


//create html 
const createHtmlTask = (task) => {
  //return an object
  return (
    `
          <div class="card mb-3">
          <!-- <label for="">Task Name: </label> -->
            <h5 class="card-header text-center fw-bold">${task.name}</h5>
            <div class="card-body border">
              <div class="mb-3 ">
              <!--  <label class="form-control for="">Assigned to: </label>-->
              <input class=" form-control" type="text" placeholder="Assigned to: ${task.assignedTo}"readonly>
            </div>
            <div class="mb-3">
            <!-- <label for="">Due Date: </label> -->
              <input class="form-control" type="text" placeholder="Due Date: ${task.dueDate}"readonly>
            </div>
            <div class="mb-3 ">
            <!-- <label for="">Description:</label>-->
              <textarea class="form-control" id="" cols=" 30" rows="3" placeholder="Description: ${task.description}
                    " readonly></textarea>
            </div>
            <div class="mb-3">
              <input class="form-control" type="text" placeholder="Status: ${task.status}"readonly>
            </div>
            <!-- Edit buttons -->
            <div class="d-flex gap-3 justify-content-center id="lastBtn">
            </div> 
          </div>  
         </div >  
        `
  )

}




// const deletBtnHtml = () => {
//   return `<div class="d-flex gap-3 justify-content-center ">
//   <button id="edit"class="btn btn-secondary">Edit</button>
//   <button id="delete"class="btn btn-danger">Delete</button>
// </div>`

// }

/*  */