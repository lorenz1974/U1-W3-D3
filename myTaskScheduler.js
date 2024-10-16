const form = document.querySelector('form')
const taskInput = document.getElementById('myNewTask')
const taskTable = document.getElementById('tasksTable')
let lastTaskId = 0

const addTaskToTable = (taskDescription) => {
  if (!taskDescription) {
    console.log('task description: empty!')
    return
  }
  lastTaskId++
  let i = lastTaskId // salvo l'ultimo id in una variabile locale
  console.log('task description: ', taskDescription)

  // Creo una nuova riga per la tabella
  const newTaskTr = document.createElement('tr')
  newTaskTr.classList.add('taskRow')
  newTaskTr.setAttribute('id', 'taskRow' + i)

  // Creo il TD del task
  const newTaskTd = document.createElement('td')
  newTaskTd.innerHTML = taskDescription
  newTaskTd.classList.add('taskDescription')
  newTaskTd.setAttribute('id', 'taskDescription' + i)
  // accodo il nuovo TD descrizione alla nuova TR
  newTaskTr.appendChild(newTaskTd)

  // Creo il TD dello status
  const newTaskStatusTd = document.createElement('td')
  newTaskStatusTd.innerHTML = '<i class="fa-regular fa-circle"></i> In progress'
  newTaskStatusTd.classList.add('taskStatus')
  newTaskStatusTd.setAttribute('id', 'taskStatus' + i)
  newTaskStatusTd.addEventListener('click', () => changeTaskStatus(i))

  // accodo il nuovo TD status alla nuova TR
  newTaskTr.appendChild(newTaskStatusTd)

  // Creo il TD del bottone di ELIMINA
  const newTaskDeleteTd = document.createElement('td')
  newTaskDeleteTd.classList.add('taskDelete')
  newTaskDeleteTd.setAttribute('id', 'taskDelete' + i)
  // Creo il bottone ELIMINA
  const newDeleteButton = document.createElement('button')
  newDeleteButton.textContent = 'Elimina'
  newDeleteButton.setAttribute('id', 'buttonDelete' + i)

  newDeleteButton.addEventListener('click', () => deleteTask(i))

  // Accodo il bottone ELIMINA al TD ELIMINA
  newTaskDeleteTd.appendChild(newDeleteButton)
  // Accodo il TD ELIMINA alla TR
  newTaskTr.appendChild(newTaskDeleteTd)

  // Accodo la TR alla tabella
  taskTable.appendChild(newTaskTr)

  console.log('i: ', i)
}

const deleteTask = (taskId) => {
  console.log('deleteTask: ', taskId)
  const taskToDelete = document.getElementById('taskRow' + taskId)
  console.log(taskToDelete)
  taskToDelete.remove()
}

const changeTaskStatus = (taskId) => {
  console.log('changeTaskStatus: ', taskId)
  const taskStatus = document.getElementById('taskStatus' + taskId)
  // Se il task non è 'Done' allora lo passo a 'Done' altrimenti ad 'In progress'
  if (taskStatus.innerHTML.includes('Done') === false) {
    taskStatus.innerHTML = '<i class="fa-solid fa-circle"></i> Done'
    const taskRow = document.getElementById('taskDescription' + taskId)
    taskRow.classList.add('taskCompleted')
  } else {
    taskStatus.innerHTML = '<i class="fa-regular fa-circle"></i> In progress'
    const taskRow = document.getElementById('taskDescription' + taskId)
    taskRow.classList.remove('taskCompleted')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const taskDescription = taskInput.value
  addTaskToTable(taskDescription)
  form.reset()
})

addTaskToTable('Definire il layout dello scheduler')
addTaskToTable('Abbozzare il CSS')
addTaskToTable('Scrivere e testare i JS')
addTaskToTable('Rifinire CSS e JS')
addTaskToTable('<b>Pushare</b> prima delle 16.57!!!')
