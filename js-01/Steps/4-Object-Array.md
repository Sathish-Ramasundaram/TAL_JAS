// ARRAY of tasks
const tasks = [task1, task2];

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
