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

  // Explicitly splices out the selected task from the 'tasks' array
  //not working yet
  deleteTask(index) {
    let newTasks = [];
    console.log(document.getElementById('delete'))
    document.getElementById('delete').addEventListener('click', (event) => {

      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].id === index) {
          //will delete three items at first?? only the first delete button works
          this.taskList.splice(index, 1)
          newTasks.push(this.taskList[i])
          this.updateCache();

        }
        // this.taskList = newTasks
        // console.log(this.taskList)
        console.log(index)
      }


      // this first button deletes all

      // this.taskList.splice(this.taskList.findIndex(a => a.id === index), 1);
      // this.updateCache();

    })
    console.log(index)  // object index 
  }



  //display the task object
  render(task) {
    htmlDivs(task)
  }

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
            <div class="d-flex gap-3 justify-content-center ">
              <button id="edit"class="btn btn-secondary">Edit</button>
              <button id="delete"class="btn btn-danger">Delete</button>
            </div>
          </div>  
         </div >  
        `
  )

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
  //add the div based on the statas Id
  document.getElementById(divBtnHtmlId).appendChild(div);
  console.log(divBtnHtmlId)

}
