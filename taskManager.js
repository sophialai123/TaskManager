
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
    document.getElementById('delete').addEventListener('click', (event) => {
      for (let i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].id === index) {

          //will delete two items at first
          this.taskList.splice(index, 1)
          this.updateCache();
        }
        console.log(this.taskList[i])
      }

    })
    //console.log(index)  // object index
  }



  //display the task object
  render(task) {
    if (task.status === "Todo") {
      // let todoArray = [];
      const todoDiv = document.getElementById('todo');
      const div = document.createElement('div')
      div.innerHTML = createHtmlTask(task);
      todoDiv.appendChild(div);
      this.deleteTask(task.id)
    }

    if (task.status === "Progress") {
      const progressDiv = document.getElementById('progress');
      const div = document.createElement('div')
      div.innerHTML = createHtmlTask(task);
      progressDiv.appendChild(div);
      this.deleteTask(task.id)
    }
    if (task.status === "Review") {
      const reviewDiv = document.getElementById('review');
      const div = document.createElement('div')
      div.innerHTML = createHtmlTask(task);
      review.appendChild(div);
      this.deleteTask(task.id)

    }
    if (task.status === "Done") {
      const doneDiv = document.getElementById('done');
      const div = document.createElement('div')
      div.innerHTML = createHtmlTask(task);
      doneDiv.appendChild(div);
      this.deleteTask(task.id)
    }
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
