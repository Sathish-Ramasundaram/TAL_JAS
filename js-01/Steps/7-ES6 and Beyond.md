
---

# ✅ ES6 (ECMAScript 2015+) — Modern JavaScript Features

---

# ✅ 1️⃣ Template Literals

**What:** Easier string building using backticks `` ` ``
**Why:** Insert variables inside strings cleanly.

```javascript
const name = "Bond"
console.log(`The name is ${name}`);
```

🖥 Output: 
The name is Bond.


Commonly used: 

const user = {
  name: "Bond",
  id: 7,
  active: true
};

console.log(`User ${user.name} (ID: ${user.id}) is ${user.active ? "Active" : "Inactive"}`);


---

# ✅ 2️⃣ Arrow Functions

**What:** Short function syntax using `=>`
**Why:** Cleaner and shorter than normal functions.

Normal Function: 
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));


```javascript
const add = (a, b) => a + b;
console.log(add(2,3));
```

🖥 Output: `5`

---

# ✅ 3️⃣ Default Parameters

**What:** Give default value if argument missing
**Why:** Avoid undefined inputs.

```javascript
function greet(name = "there") {
  console.log("Hi ",name);
}
greet();
```

🖥 Output: Hi there


Now: 

function greet(name = "there") {
  console.log("Hi",name);
}
greet("Admin");


Output:
Hi Admin

---

# ✅ 4️⃣ Destructuring

**What:** Extract values from array/object easily
**Why:** Less repetitive code.

```javascript
const user = { name: "Ana", age: 20 };
const { name } = user;
console.log(name);
```

🖥 Output: `Ana`


✅ Real-World Example — API Response Handling

Imagine you get this data from an API:

const response = {
  id: 101,
  name: "Sathish",
  email: "sathish@mail.com",
  isActive: true
};

❌ Without Destructuring (repetitive)
console.log(response.name);
console.log(response.email);
console.log(response.isActive);


Too repetitive.

✅ With Destructuring (real-world style)
const { name, email, isActive } = response;

console.log(name);
console.log(email);
console.log(isActive);


Cleaner ✅
Shorter ✅
Common in production code ✅

---

# ✅ 5️⃣ Classes

**What:** Blueprint to create objects
**Why:** Cleaner object-oriented style.

Class = Design
Object = Actual item built from design


class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Arun", 20);
console.log(user1);

const user2 = new User("Ram", 22);
console.log(user2);

Output: 
User { name: 'Ana', age: 20 }
User { name: 'Ram', age: 22 }


class User → blueprint
new User(...) → object created from blueprint

Next Step (Recommended)

Usually classes also include methods:

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}



Add One Simple Method (optional but useful)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `${this.name} is ${this.age} years old`;
  }
}

const user = new User("Ana", 20);

console.log(user.info());


Output:

Ana is 20 years old


---

# ✅ 6️⃣ Modules

**What:** Split code into files
**Why:** Organize large projects.

math.js
export function add(a, b) {
  return a + b;
}

script.js
import { add } from "./math.js";

console.log(add(2, 3));


update HTML:
<script type="module" src="script.js"></script>

---

# ✅ 7️⃣ Promises

**What:** Handle async results
**Why:** Manage success/failure of async work.

```javascript
Promise.resolve("Done")
  .then(v => console.log(v));
```

🖥 Output: `Done`

---

# ✅ Teaching Summary Line

> ES6 introduced shorter syntax, better structure, and async handling to modernize JavaScript.

---

If you want, next I can give you:
✅ same list as a one-page student cheat sheet
✅ ES6 vs old JS comparison
✅ ES6 quiz questions for class.
