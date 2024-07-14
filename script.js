const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const editModal = document.getElementById('edit-modal');
const editTaskInput = document.getElementById('edit-task-input');
const saveEditBtn = document.getElementById('save-edit-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const noteModal = document.getElementById('note-modal');
const notePic = document.getElementById('note-pic');
const closeNoteBtn = document.getElementById('close-note-btn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	const task = taskInput.value.trim();
	if (task) {
		const taskListItem = document.createElement('li');
		taskListItem.textContent = task;
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

taskList.addEventListener('click', toggleTaskDone);

function toggleTaskDone(event) {
	if (event.target.tagName === 'LI'){
		event.target.classList.toggle('done');
	}
}

taskList.addEventListener('dblclick', editTask);




