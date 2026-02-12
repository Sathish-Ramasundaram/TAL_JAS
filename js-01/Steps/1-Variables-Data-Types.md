Chapter 1: Variables and data types
Understanding how to declare and use variables, as well as the different data types primitive (e.g. null, undefined, strings, numbers, Booleans, bigint, symbol) and structural (e.g. object, function) in JavaScript. 


1. Variables & Data Types

Example: 

let x = 10;

let → declaration keyword
x   → variable name
10  → value
number → data type

Variable Declaration: 
--------------------
-> var, let, const

var — Old Style (Avoid in New Code)
var x = 10;

Problems:
function scoped
hoisting confusion
redeclaration allowed

Modern rule:
Prefer let and const

----------------------------------------
let → variable can be reassigned
let x = 10;
x = 20;   // ✅ allowed

------------------------------------------
const → variable cannot be reassigned
const x = 10;
x = 20;   // ❌ error

But for objects/arrays:
const arr = [1,2,3];
arr.push(4);   // ✅ allowed (mutation)
arr = [5,6];   // ❌ not allowed (reassignment)

------------------------------------------



Hoisting is JavaScript's behavior where declarations of variables and functions are moved to the top of their scope during the compilation phase - before the code is executed. 

Only declarations are hoisted, not initializations. 
That means: 
The variable or function name is known before execution

```
declaration moves
assignment does NOT move
```
**What is “hoisting confusion” with `var`?**

# ✅ Example — var Hoisting Confusion

## Code

```javascript
console.log(x);
var x = 10;
```

---

## 🖥 Output

```
undefined
```

---

## 😲 Why Not Error?

Because JS internally treats it like this:

```javascript
var x;          // moved to top (hoisted)
console.log(x); // exists but not assigned → undefined
x = 10;
```

This surprises beginners — hence **hoisting confusion**.

---

# ✅ Compare — let / const (No Confusion)

```javascript
console.log(y);
let y = 10;
```

---

## 🖥 Output

```
ReferenceError
```

Much clearer and safer.
That’s why modern JS prefers:

```
let
const
```

---

# ✅ Bigger Hoisting Trap — var Inside Function

## Code

```javascript
function test() {
  console.log(a);
  var a = 5;
}

test();
```

## 🖥 Output

```
undefined
```

Because internally:

```javascript
function test() {
  var a;
  console.log(a);
  a = 5;
}
```

---

# ✅ Real Confusion Case — Shadowing

```javascript

var a = 1;

function demo() {
  console.log(a);
  var a = 2;
}

demo();

```

---

## 🖥 Output

```
undefined
```

Students expect `1` — but get undefined
Because inner `var a` is hoisted inside function.

if you use let or const, you will get ReferenceError.

---


Data Types:
JavaScript Has 2 Main Categories
1️⃣ Primitive types
2️⃣ Reference (Object) types

Primitive Data Types (Basic Values)
These store single values.

Reference Type (Object Family)
These store collections of values.
Object — Key/Value Structure
Arrays (Special Object)
Stores list of values.

----------------------------------


type nul > script.js

```

// STRING
let taskTitle = "Learn JavaScript Basics";
console.log("Title:", taskTitle);
console.log("Type of Title:", typeof(taskTitle));

// NUMBER
let priority = 1;
console.log("Priority:", priority);
console.log("Type of Priority:", typeof(priority));

// BOOLEAN
let isCompleted = false;
console.log("Completed:", isCompleted);
console.log("Type of isCompleted:", typeof(isCompleted));

// NULL (no due date yet)
// null means: “this variable intentionally has no value.”
let dueDate = null;
console.log("Due date:", dueDate);
console.log("Type of dueDate:", typeof(dueDate));

// UNDEFINED (not assigned yet)
let note;
// note = "super"; if you use this, it is defined. 

// BIGINT (very large id)
let taskId = 9007199254740993n;

// SYMBOL (unique internal key)
let internalKey = Symbol("taskKey");



console.log("Note:", note);
console.log("Task ID:", taskId);
console.log("Symbol:", internalKey);

```

You can either in terminal or in web page using HTML.

node filename.js ----> To run in terminal
node script.js

2. Common confusion: 
null vs Empty Value vs undefined

null:
✔️ Means intentionally no value
✔️ Often used when value will come later
⚠️ typeof null returns "object" — but this is a JavaScript bug/legacy behavior

Empty value:
Value exists — but contains nothing

Examples of empty:
""      → empty string
[]      → empty array
{}      → empty object
0       → empty number (zero)

undefined means:
A variable exists, but no value has been assigned yet.

let x;
console.log(x); // undefined

------------------------

Simple Example: 

const message = null;
const name = "";

// Type check
console.log("typeof message:", typeof message);
console.log("typeof name:", typeof name);

// Truthy / Falsy check
if (message) {
  console.log("message is truthy");
} else {
  console.log("message is falsy");
}

if (name) {
  console.log("name is truthy");
} else {
  console.log("name is falsy");
}

console.log("------------------");

// Length check (only works for string)
console.log("name length:", name.length);

// console.log(message.length); ❌ would throw error

-----------------------

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

7. Structural types = types that can hold multiple values or behavior inside them.
They are built using primitives and can contain:
properties
methods (functions)
nested values

Think of them as containers / structures.

✅ Two Main Structural Types in JavaScript
1️⃣ Object
2️⃣ Function


Objects store data in key → value pairs.

let user = {
  name: "Sathish",
  id: 120
};

console.log(user.name); // Sathish

🔹 name and id → property keys (also called properties or fields)
🔹 "Sathish" and 120 → property values

-------

Quick Guide about Class and Method:
- Class is a blueprint to create multiple objects. 
- A function inside a class is called method. 
- constructor() - Special method that runs when object is created. used to assign property values
- this keyword - Store value inside this object instance. 

Expand the above object into class & method: 


class User {

constructor(name, id) 
{
this.name = name;
this.id = id;
}

showInfo() 
{
console.log("Name:", this.name);
console.log("ID:", this.id);
}

}

const user1 = new User("Sathish", 120);
const user2 = new User("Arun", 122);

user1.showInfo();
console.log(user1.name);

Output: 


-----------------



Objects can contain:
strings
numbers
arrays
other objects
functions

So they are structured data holders.

Functions are also objects in JavaScript.

They store behavior (code) instead of just data.

function greet() {
  return "Hello";
}

console.log(greet()); // Hello


Check this:

console.log(typeof greet); // "function"


But internally, functions are still objects with callable behavior.


Primitive = value
Structural = container of values or behavior


