Smart Task Tracker

1. Variables & Data Types

A task has:
title
completed or not
priority number
due date (optional → null)
unique id (bigint demo)
extra note (undefined demo)


2. 

type nul > script.js

```

// STRING
let taskTitle = "Learn JavaScript Basics";

// BOOLEAN
let isCompleted = false;

// NUMBER
let priority = 1;

// NULL (no due date yet)
let dueDate = null;

// UNDEFINED (not assigned yet)
let note;

// BIGINT (very large id)
let taskId = 9007199254740993n;

// SYMBOL (unique internal key)
let internalKey = Symbol("taskKey");

console.log("Title:", taskTitle);
console.log("Completed:", isCompleted);
console.log("Priority:", priority);
console.log("Due date:", dueDate);
console.log("Note:", note);
console.log("Task ID:", taskId);
console.log("Symbol:", internalKey);

```
3. 

type nul > index.html

```

<!DOCTYPE html>
<html>
<head>
  <title>Smart Task Tracker - JS Practice</title>
</head>
<body>

  <h1>Smart Task Tracker</h1>
  <p>Open browser console to see JavaScript output.</p>

  <script src="script.js"></script>
</body>
</html>

```
4. Object and Array: 

Concept First (2 lines only)
Object = one task with properties (title, priority, status)
Array = list of many task objects


5. Replace the code with this: 

```

// One task as OBJECT
const task1 = {
  id: 1,
  title: "Learn Variables",
  completed: false,
  priority: 1
};

const task2 = {
  id: 2,
  title: "Practice Objects",
  completed: false,
  priority: 2
};

// ARRAY of tasks
const tasks = [task1, task2];

// Access object property
console.log("First task title:", task1.title);

// Access array item
console.log("Second task:", tasks[1]);

// Change value
tasks[0].completed = true;

console.log("Updated tasks:", tasks);

```


6. Test


7. Control Flow (if + loops)

Goal now:
👉 Use if/else
👉 Use for loop
👉 Use break / continue
👉 Work with your tasks array

8. Concept (2 lines)
if/else → make decisions
loops → repeat work for each task


9. Update the code with this: 

```

const tasks = [
  { id: 1, title: "Learn Variables", completed: true, priority: 1 },
  { id: 2, title: "Practice Objects", completed: false, priority: 2 },
  { id: 3, title: "Study Loops", completed: false, priority: 3 }
];

// ✅ IF / ELSE
if (tasks[0].completed) {
  console.log("Task 1 is completed");
} else {
  console.log("Task 1 is pending");
}


// ✅ FOR LOOP
for (let i = 0; i < tasks.length; i++) {
  console.log("Task:", tasks[i].title);
}


// ✅ CONTINUE — skip completed tasks
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed) {
    continue;
  }
  console.log("Pending:", tasks[i].title);
}


continue means:
🚫 Skip the rest of this loop turn
▶️ Jump to next item


// ✅ BREAK — stop when priority = 3
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].priority === 3) {
    console.log("Found priority 3 — stopping");
    break;
  }
}

Even simple: 

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Stop at 5");
    break;
  }

  console.log(i);
}


break → stop the whole loop

```
10. Test

11. Functions
🎯 Concept (2 lines)
A function = reusable block of code
Write once → call many times with different value

12. Update with this:

const tasks = [
  { id: 1, title: "Learn Variables", completed: true, priority: 1 },
  { id: 2, title: "Practice Objects", completed: false, priority: 2 }
];


// ✅ FUNCTION — print all tasks
function printTasks(taskList) {
  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].title, "-", taskList[i].completed);
  }
}

printTasks(tasks);

-------

pieces: 

1. -> Direct access
console.log(tasks[0].title, "-" ,tasks[0].completed)
console.log(tasks[1].title, "-" ,tasks[1].completed)

2. → Loop
for(i=0; i < tasks.length; i++){
    console.log(tasks[i].title, "-" ,tasks[i].completed)
}

3. → Reference variable
const taskList = tasks;
for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].title, "-", taskList[i].completed);
  }

4. → Function scope
function printTask() {
const taskList = tasks;
for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].title, "-", taskList[i].completed);
}
}

printTask();


5. → Parameter passing
function printTask(taskReceiver) {
    console.log(taskReceiver[0].title);
    console.log(taskReceiver[1].title);
}

printTask(tasks);

→ Reusable abstraction

--------


// ✅ FUNCTION — add new task
function addTask(id, title, priority) {
  const newTask = {
    id: id,
    title: title,
    completed: false,
    priority: priority
  };

  tasks.push(newTask);
}

addTask(3, "Study Functions", 2);


// ✅ FUNCTION — count pending
function countPending(taskList) {
  let count = 0;

  for (let i = 0; i < taskList.length; i++) {
    if (!taskList[i].completed) {
      count++;
    }
  }

  return count;
}


// ▶ call functions
printTasks(tasks);

addTask(3, "Study Functions", 2);

printTasks(tasks);

console.log("Pending:", countPending(tasks));


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

const tasks = [
  { id: 1, title: "Learn Variables", completed: true },
  { id: 2, title: "Practice Objects", completed: false },
  { id: 3, title: "Study Functions", completed: false }
];


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

