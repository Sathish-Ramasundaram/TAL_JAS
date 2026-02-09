
13. DOM:
    Concept (2 lines)
    DOM lets JavaScript read and change HTML elements
    We select elements → then update their content

14. update html:

<!DOCTYPE html>
<html>
<head>
  <title>Smart Task Tracker</title>
</head>
<body>

  <h1>Smart Task Tracker</h1>

  <ul id="taskList"></ul>

  <script src="script.js"></script>
</body>
</html>

15. update js:

Simple: 
const tasks = [ "Hello", "Buy", "Cook"];


const container = document.getElementById("task");

for (let i = 0; i < tasks.length; i++) {
  const p = document.createElement("p");
  p.textContent = tasks[i];
  container.appendChild(p);
}

---------------------------------

const tasks = [
{ id: 1, title: "Learn Variables", completed: true },
{ id: 2, title: "Practice Objects", completed: false },
{ id: 3, title: "Study Functions", completed: false }
];



const container = document.getElementById("pTask");

for (let i = 0; i < tasks.length; i++) {
  const p = document.createElement("p");
  p.textContent = tasks[i].title;
  container.appendChild(p);
}

-------------------------------------------


// ✅ select DOM element
const listElement = document.getElementById("taskList");

// ✅ function to render tasks to page
function renderTasks(taskList) {
listElement.innerHTML = ""; // clear first

for (let i = 0; i < taskList.length; i++) {
const li = document.createElement("li");
li.textContent = taskList[i].title;

    listElement.appendChild(li);

}
}

// ▶ call it
renderTasks(tasks);

Mini Example for above one:

const ul = document.getElementById("taskList");

const li = document.createElement("li");
li.textContent = "Hello Task";

ul.appendChild(li);
