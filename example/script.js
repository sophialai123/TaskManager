// Set Item
localStorage.setItem("lastname", "Smith");



// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("lastname");


const person = {
  name: "Kruti Patel",
  taskStatus: "Pending",
  taskDes: "fix bugs",
}


//JSON.stringify
localStorage.setItem('user', JSON.stringify(person));

document.getElementById("stringJSON").innerHTML = localStorage.getItem('user');

//JSON.parse
console.log(JSON.parse(localStorage.getItem('user')));



//new task
const task = {
  id: 0,
  name: "sophia",
  status: 'todo',
  taskDes: "fix the local storage"
}

//set the data and pass taskList as the key and the task object value
localStorage.setItem('taskList', JSON.stringify(task));

//display on the brower
document.getElementById('stringJSON').innerHTML = localStorage.getItem('taskList')

//console.log
console.log(JSON.parse(localStorage.getItem('taskList')))
const myoject = JSON.parse(localStorage.getItem('taskList'))

//get the each value from the object
console.log(myoject.name)


//remove(delete) the localsorage just pass the key
localStorage.removeItem("key")


//will clear everything
localStorage.clear()



for (const key in localStorage) {
  // Skip built-in properties like length, setItem, etc.
  if (localStorage.hasOwnProperty(key)) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}

/* 
function populateStorage() {
localStorage.setItem('bgcolor', 'red');
localStorage.setItem('font', 'Helvetica');
localStorage.setItem('image', 'miGato.png');

localStorage.clear();
}



// for (var i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }
*/