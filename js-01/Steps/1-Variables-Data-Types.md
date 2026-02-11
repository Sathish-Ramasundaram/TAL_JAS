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

function scoped: 
A var variable is visible everywhere inside the entire function, not just inside { } blocks.

Example: 
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x);
}

test();

-------
Output: 
10

Even though x was declared inside if { } block,
var ignores block scope — it spreads to whole function.

if block ❌
function block ✅

-----

Now Compare — let Is Block Scoped
change it from var to let

Output: 
Error: y is not defined


let respects { } block.
only inside if block
not outside

----------------------------------------------

Hoisting = JavaScript moves variable declarations to the top of their scope before running code.

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

Students expect `1` — but get undefined.

Because inner `var a` is hoisted inside function.

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
  age: 25
};

console.log(user.name); // Sathish


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


