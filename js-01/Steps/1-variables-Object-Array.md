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

// NUMBER
let priority = 1;

// BOOLEAN
let isCompleted = false;

// NULL (no due date yet)
// null means: “this variable intentionally has no value.”
let dueDate = null;

// UNDEFINED (not assigned yet)
let note;
// note = "super"; if you use this, it is defined. 

// BIGINT (very large id)
let taskId = 9007199254740993n;

// SYMBOL (unique internal key)
let internalKey = Symbol("taskKey");

console.log("Title:", taskTitle);
console.log("Priority:", priority);
console.log("Completed:", isCompleted);
console.log("Due date:", dueDate);
console.log("Note:", note);
console.log("Task ID:", taskId);
console.log("Symbol:", internalKey);

```

You can either in terminal or in web page using HTML.

node filename.js ----> To run in terminal
node script.js

2. Common confusion: 
null vs Empty Value

null:
Intentionally no value
You are saying: “This value is deliberately set to nothing.”

Empty value:
Value exists — but contains nothing

Examples of empty:
""      → empty string
[]      → empty array
{}      → empty object
0       → empty number (zero)


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
console.log("First task completion status:", task1.completed)

console.log("-----------------------------------------------");

// Access array item
console.log("Second task:", tasks[1]);

console.log("-----------------------------------------------");

// Change value
tasks[0].completed = true;

console.log("Updated tasks:", tasks);


```

6. Test
