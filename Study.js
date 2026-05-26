  function addTask() {
  let taskName = document.getElementById("taskName").value;
  let taskDate = document.getElementById("taskDate").value;

  if (taskName === "") {
    alert("Please enter a task");
    return;
  }

  let taskList = document.getElementById("taskList");

  let taskItem = document.createElement("div");
  taskItem.className = "task";

  let taskText = document.createElement("span");
  taskText.innerText = taskName + " (" + taskDate + ")";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.onchange = function () {
    taskItem.classList.toggle("completed");
    updateProgress();
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    taskItem.remove();
    updateProgress();
  };

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);

  taskList.appendChild(taskItem);

  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";

  updateProgress();
}

function updateProgress() {
  let tasks = document.querySelectorAll(".task");
  let completed = document.querySelectorAll(".completed");

  let total = tasks.length;

  let percent = total === 0 ? 0 : (completed.length / total) * 100;

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    Math.round(percent) + "% completed";


function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
}