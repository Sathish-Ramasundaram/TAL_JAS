
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

// For and IF / ELSE

for (i = 0; i < tasks.length; i++) {
  if (tasks[i].completed) {
    console.log('Task Name: ', tasks[i].title, 'is completed');
  } else {
    console.log('Task Name: ', tasks[i].title, ' is pending');
  }
}


console.log("-------------------------");


// ✅ FOR LOOP
for (let i = 0; i < tasks.length; i++) {
  console.log("Task Name:", tasks[i].title);
}

console.log("-------------------------");

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

10. Common Confusion: 
For this example, When all the completed status is false, both continue and break looks work like same.

continue → skip this item
break → stop the loop


Stop When First Pending Task Found
Suppose you only want the first pending task, not all pending tasks.

const tasks = [
  { id: 1, title: "Learn Variables", completed: true, priority: 1 },
  { id: 2, title: "Practice Objects", completed: false, priority: 2 },
  { id: 3, title: "Study Loops", completed: false, priority: 3 }
];


for (let i = 0; i < tasks.length; i++) {
  if (!tasks[i].completed) {
    console.log("Finding First pending task -", "Task ID:", tasks[i].id, "Task Title:", tasks[i].title);
    break;   // stop loop after first match
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

11. Test


