# Smart Task Tracker - JavaScript Training Project

## Overview

**Smart Task Tracker** is a beginner-friendly JavaScript learning project designed to teach fundamental JavaScript concepts through practical examples. The project demonstrates key programming concepts by building a simple task management interface.

## Project Structure

```
js-01/
├── index.html                                    # Main HTML file
├── script.js                                     # JavaScript code with switch statement example
├── README.md                                     # This file
└── Steps/
    ├── Step1-variables-if-else-continue-break-function-DOM.md
    ├── Step1-1-switch.md
    └── Step02-asyn-promise-asyn-await.md
```

## Learning Concepts Covered

### 1. **Variables & Data Types**

Learn different JavaScript data types through a task object:

- **String**: Task titles and descriptions
- **Boolean**: Completion status (completed/not completed)
- **Number**: Priority levels and numerical IDs
- **Null**: Optional values like due dates
- **Undefined**: Variables declared but not yet assigned
- **BigInt**: Large unique task IDs
- **Symbol**: Unique internal identifiers

**Example:**

```javascript
let taskTitle = 'Learn JavaScript Basics'; // STRING
let isCompleted = false; // BOOLEAN
let priority = 1; // NUMBER
let dueDate = null; // NULL
let note; // UNDEFINED
let taskId = 9007199254740993n; // BIGINT
let internalKey = Symbol('taskKey'); // SYMBOL
```

### 2. **Objects & Arrays**

Organize tasks efficiently:

- **Object**: Represents a single task with properties (id, title, completed, priority)
- **Array**: Contains multiple task objects

**Example:**

```javascript
const task1 = {
  id: 1,
  title: 'Learn Variables',
  completed: false,
  priority: 1,
};

const tasks = [task1, task2]; // Array of task objects
```

### 3. **Control Flow - Switch Statement**

Make decisions based on task priority:

```javascript
let priority = 2;

switch (priority) {
  case 1:
    console.log('Low');
    break;
  case 2:
    console.log('Medium');
    break;
  case 3:
    console.log('High');
    break;
  default:
    console.log('Unknown');
}
```

### 4. **Asynchronous Programming**

#### **setTimeout** - Delayed Execution

Learn how JavaScript runs code asynchronously:

```javascript
console.log('Start');
setTimeout(function () {
  console.log('Task finished after 5 seconds');
}, 5000);
console.log('End');
// Output: Start → End → (5 sec pause) → Task finished after 5 seconds
```

#### **Promises** - Clean Async Containers

Understand how Promises work with resolve/reject:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('✅ Task Result Ready');
  }, 5000);
});

myPromise.then(function (result) {
  console.log(result);
});
```

**Real-Life Analogy:** A Promise is like ordering food online:

- Order placed → Promise created
- Food cooking → pending
- Food delivered → resolved ✅
- Restaurant closed → rejected ❌

#### **Async/Await** - Modern Approach

Cleaner syntax for handling asynchronous code:

```javascript
async function makeTask() {
  const result = await myPromise;
  console.log(result);
}
```

**Key Point:** `async/await` uses Promises internally—it's a cleaner way to write promise-based code.

## Files Description

| File                                                     | Purpose                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------- |
| `index.html`                                             | Main HTML file with Smart Task Tracker title and task list container |
| `script.js`                                              | Current JavaScript demonstrating switch statement example            |
| `Step1-variables-if-else-continue-break-function-DOM.md` | Tutorial on variables, data types, objects, and arrays               |
| `Step1-1-switch.md`                                      | Tutorial on switch statements and loops                              |
| `Step02-asyn-promise-asyn-await.md`                      | Tutorial on asynchronous programming concepts                        |

## How to Use

1. Open `index.html` in a web browser
2. Open the browser's **Developer Console** (F12 → Console tab) to see JavaScript output
3. Follow the step-by-step tutorials in the `Steps/` folder
4. Modify `script.js` to practice the concepts

## Key JavaScript Concepts

### Synchronous vs Asynchronous

- **Synchronous**: Runs line by line, waits for each line to complete
- **Asynchronous**: Starts work, continues execution, result comes later

### Loop Types

- **while**: Check condition BEFORE entering the loop
- **do...while**: Enter the loop once, THEN check condition

## Next Steps

Progress through the step files in order:

1. **Step 1**: Master variables, data types, objects, and arrays
2. **Step 1.1**: Practice switch statements and control flow
3. **Step 2**: Learn asynchronous programming with promises and async/await

## Tips for Learning

✅ Open the console while coding to see outputs  
✅ Modify the code and test different values  
✅ Try creating more task objects and arrays  
✅ Experiment with different priority levels  
✅ Test async functions with different timeout values

---

**Happy Learning!** 🚀
