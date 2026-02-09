
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

Mini Example for below one:
const ul = document.getElementById("taskList");

const li = document.createElement("li");
li.textContent = "Hello Task";

ul.appendChild(li);

---------------------------------

const tasks = [
{ id: 1, title: "Learn Variables", completed: true },
{ id: 2, title: "Practice Objects", completed: false },
{ id: 3, title: "Study Functions", completed: false }
];

const books = [
  { sl: 1, title: "Apple", completed: false},
  { sl: 2, title: "Carrot", completed: false},
  { sl: 3, title: "Banana", completed: true},
];


const listElement = document.getElementById("taskList");

function renderTasks(taskList) {
listElement.innerHTML = ""; // clear first

for (let i = 0; i < taskList.length; i++) {
const li = document.createElement("li");
li.textContent = taskList[i].title;

    listElement.appendChild(li);

}
}

renderTasks(tasks);
renderTasks(books);


