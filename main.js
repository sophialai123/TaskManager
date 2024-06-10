/* *******************************  Form Input Vaildation ******************************* */

// //call the taskPlanner class here
const taskPlanner = new TaskManager();


addTask.addEventListener('click', clearInputsData)
addTodoTask.addEventListener('click', clearInputsData)
addProgressTask.addEventListener('click', clearInputsData)
addReviewTask.addEventListener('click', clearInputsData)
addDoneTask.addEventListener('click', clearInputsData)
resetButton.addEventListener('click', clearInputsData)

//valiated names input value
submbitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const dateValue = document.getElementById('dateValue');
  let enteredDate = new Date(dateValue.value);

  //validatation form input functions
  if (fname.value == '' || fname.value == null || fname.value.length < 8) {
    fnameError.innerHTML = "Input required and longer than 8 characters";
    fnameError.style.color = 'red';
    return;
  } else {
    fnameError.innerHTML = "✅ ";
  }

  //else if (descrption.value == "" || descrption.value == null || descrption.value.length < 15) {
   // descrptionError.innerHTML = 'Input required and longer than 15 characters';
    //descrptionError.style.color = 'red';
    //return;
  //}
  // else if (descrption.value.length > 15) {
  //   descrptionError.innerHTML = "✅ ";

  // }

  if (assign.value == "" || assign.value == null) {
    assignError.innerHTML = "Input required"
    assignError.style.color = "red";
    return;
  } else {
    assignError.innerHTML = "✅ ";
  }
 
  if (statusInput.value == null || statusInput.value == "") {
    statusError.innerHTML = "Input required";
    statusError.style.color = "red";
    return;
  } else {
    statusError.innerHTML = "✅ ";
  }
 
  //compare current date with input date
  if (dateValue.value === null || dateValue.value === "") {
    dateError.innerHTML = "Input required";
    dateError.style.color = "red";
    return;
  }
  else if (date.getTime() > enteredDate.getTime()) {
    dateError.innerHTML = "Due date must be after the current date";
    dateError.style.color = "red";
    return;
  } else {
    dateError.innerHTML = "✅ ";
  }
 
    //task value from the classManger
    taskPlanner.addTask(`${fname.value}`, `${descrption.value}`, ` ${assign.value}`, `${enteredDate.toISOString().split('T')[0]}`, `${statusInput.value}`);
    
    closeModal();
})







