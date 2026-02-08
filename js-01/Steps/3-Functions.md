11. Functions
    🎯 Concept (2 lines)
    A function = reusable block of code
    Write once → call many times with different value

12. Update with this:

const tasks = [
{ id: 1, title: "Learn Variables", completed: true, priority: 1 },
{ id: 2, title: "Practice Objects", completed: false, priority: 2 },
{ id: 3, title: "Learn Loop", completed: false, priority: 3 }
];

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

---

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
