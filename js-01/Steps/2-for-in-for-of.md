for…in → gives INDEX / KEY
for…of → gives VALUE

Example: 

const user = { name: "Sam", age: 25 };

for (let test in user) {
  console.log(test);
}

Output:
name
age

If you want values:
console.log(user[key]);


----------------------------

for…of → Values (Iterables only)

Used for:
arrays
strings
maps
sets
iterable objects

const arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value);
}

Output: 
a
b
c