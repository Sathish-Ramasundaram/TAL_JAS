11. Functions
A function is a reusable block of code designed to perform a specific task. It can be called multiple times with different inputs and can return a result.

12. Update with this:

const tasks = [
{ id: 1, title: "Learn Variables", completed: true, priority: 1 },
{ id: 2, title: "Practice Objects", completed: false, priority: 2 },
{ id: 3, title: "Learn Loop", completed: false, priority: 3 }
];


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

addTask(4, "Study Functions", 2);
addTask(5, "Study GIT", 4);


// ✅ FUNCTION — print all tasks
function printTasks(taskList) {
for (let i = 0; i < taskList.length; i++) {
console.log(taskList[i].title, "-", taskList[i].completed);
}
}

printTasks(tasks);

---

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


-------

return:

// Example 1 → return literal directly

function testReturn() {
    return "hello";
}

console.log("This is return:", testReturn());


// Example 2 → return stored variable

function test2Return() {
    const hello = "Hi there"
    return hello;
}

console.log("This is return example 2:", test2Return());

--------

const tasks = [
{ id: 1, title: "Learn Variables", completed: true, priority: 1 },
{ id: 2, title: "Practice Objects", completed: false, priority: 2 },
{ id: 3, title: "Learn Loop", completed: false, priority: 3 }
];

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

console.log("No of Pending Tasks:", countPending(tasks));


------------


Function scope = variables declared inside a function are accessible only inside that function.
Outside code cannot access them
They are private to the function

Example: 
function test() {
  let x = 10;
  console.log(x);
}

test();          // 10
console.log(x);  // ❌ Error

Why error?
Because x lives only inside test() — it has function scope.


function greet(name) {
  let message = "Hello " + name;
  return message;
}

console.log(greet("Sam"));
console.log(message); // ❌ not accessible

Declared inside function → usable only inside function

------------------------------

Closure:

Closure is just one step beyond function scope.
A closure happens when an inner function remembers and can use variables from its outer function — even after the outer function has finished running.

If you feel hard to understand: 
Go down to top:

function makeCounter() {
  let count = 0; // The 'count' variable is in the outer function's scope

  function increment() {
    count++;
    return count;
  }

  return increment; // Exposing the inner function
}

const counter1 = makeCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = makeCounter(); // Creates a *new*, separate closure with its own 'count'
console.log(counter2()); // Output: 1


function createCounter() {
  let value = 0;

  return function() {
    value++;
    return value;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2

------------------------------------------------------


function createCounter() {
  let value = 0;

  return function () {
    value++;
    return value;
  };
}

const counter = createCounter();

console.log(counter());

Output: 
1

The inner function remembers the value variable even after createCounter() finishes.
That memory = closure.



-----------------------------------------------------------

function createCounter() {
  let value = 0;

  return function () {
    value++;
    return value;
  };
}

const counter = createCounter();

console.log(counter);


Output: 


ƒ () {
    value++;
    return value;
  }


-------------------------------------------

function createCounter() {
let value = 0;
return value;
}

const counter = createCounter();

console.log(counter);

-----------------------------------------


function createCounter() {
let value = 0;
return value;
}
console.log(createCounter());
