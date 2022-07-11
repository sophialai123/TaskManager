/* *******************************  Form Input Vaildation ******************************* */

// //call the taskPlanner class here
const taskPlanner = new TaskManager();

const fname = document.getElementById('fname');
const fnameError = document.getElementById('ferr');
const descrption = document.getElementById('descrption');
const descrptionError = document.getElementById('derr');
const assign = document.getElementById('assign');
const assignError = document.getElementById('assignTo');
const date = new Date();
const dateError = document.getElementById('dateErr');
const statusInput = document.getElementById('status');
const statusError = document.getElementById('statusErr')
const submbitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const resetForm = document.getElementById('form');
const dateValue = document.getElementById('dateValue');

//valiated names input value
submbitButton.addEventListener('click', (event) => {

  event.preventDefault();

  const dateValue = document.getElementById('dateValue');
  let enteredDate = new Date(dateValue.value);

  //validatation form input functions

  if (fname.value == '' || fname.value == null || fname.value.length < 8) {
    fnameError.innerHTML = "Input required and longer than 8 characters";
    fnameError.style.color = 'red';
  }

  else if (descrption.value == "" || descrption.value == null || descrption.value.length < 15) {
    descrptionError.innerHTML = 'Input required and longer than 15 characters';
    descrptionError.style.color = 'red';
  }
  else if (assign.value == "" || assign.value == null) {
    assignError.innerHTML = "Input required"
    assignError.style.color = "red";
  }
  //compare current date with input date
  else if (dateValue.value === null || dateValue.value === "") {
    dateError.innerHTML = "Input required";
    dateError.style.color = "red";
  }
  else if (date.getTime() > enteredDate.getTime()) {
    dateError.innerHTML = "Due date must be before the current date";
    dateError.style.color = "red";
  }

  else if (statusInput.value == null || statusInput.value == "") {
    statusError.innerHTML = "Input required";
    statusError.style.color = "red";
  }

  else {
    //task value from the classManger
    taskPlanner.addTask(`${fname.value}`, `${descrption.value}`, ` ${assign.value}`, `${enteredDate.toISOString().split('T')[0]}`, `${statusInput.value}`);
  }

})



//call all the validation functions
// validationTaskNameInput()
// validationDescrptionInput()
// validationAssignToInput()
// validationDueDateInput()
// validationTaskStatusInput()
// getAllFormInputValue()

// //validatation form input functions
// const validationTaskNameInput = () => {
//   if (fname.value == '' || fname.value == null || fname.value.length < 8) {
//     fnameError.innerHTML = "Input required and longer than 8 characters";
//     fnameError.style.color = 'red';
//   } else { validationDescrptionInput() }

// }


// const validationDescrptionInput = () => {
//   if (descrption.value == "" || descrption.value == null || descrption.value.length < 15) {
//     descrptionError.innerHTML = 'Input required and longer than 15 characters';
//     descrptionError.style.color = 'red';
//   }
// }

// const validationAssignToInput = () => {
//   if (assign.value == "" || assign.value == null) {
//     assignError.innerHTML = "Input required"
//     assignError.style.color = "red";
//   }
// }


// const validationDueDateInput = (event) => {
//   //compare current date with input date
//   const dateValue = document.getElementById('dateValue');
//   let enteredDate = new Date(dateValue.value);
//   if (dateValue.value === null || dateValue.value === "") {
//     dateError.innerHTML = "Input required";
//     dateError.style.color = "red";
//   } else if (date.getTime() > enteredDate.getTime()) {
//     dateError.innerHTML = "Due date must be before the current date";
//     dateError.style.color = "red";
//   }
// }


// const validationTaskStatusInput = () => {
//   if (statusInput.value == null || statusInput.value == "") {
//     statusError.innerHTML = "Input required";
//     statusError.style.color = "red";

//   }
// }



// const getAllFormInputValue = () => {

//   const dateValue = document.getElementById('dateValue');
//   let enteredDate = new Date(dateValue.value);
//   //task value from the classManger
//   taskPlanner.addTask(`${fname.value}`, `${descrption.value}`, ` ${assign.value}`, `${enteredDate.toISOString().split('T')[0]}`, `${statusInput.value}`);

// }





//reset buttion function
resetButton.addEventListener('click', () => {
  resetForm.reset();
  fnameError.innerHTML = "";
  descrptionError.innerHTML = "";
  assignError.innerHTML = "";
  dateError.innerHTML = "";
  statusError.innerHTML = "";

})