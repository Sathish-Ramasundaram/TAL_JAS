for…in → gives INDEX / KEY
for…of → gives VALUE

Example: 

const user = { name: "sam", age: 25}
const tasks = [
  { id: 1, title: "Learn Variables", completed: true, priority: 1 },
  { id: 2, title: "Practice Objects", completed: false, priority: 2 },
  { id: 3, title: "Study Loops", completed: false, priority: 3 }
];


for (let key in user) {
  console.log(key);
}

for (let key in tasks ) {
    console.log(key);
}



Output:
name
age
0
1
2


If you want values:
console.log(user[key]);


sam
25
{id: 1, title: 'Learn Variables', completed: true, priority: 1}
{id: 2, title: 'Practice Objects', completed: false, priority: 2}
{id: 3, title: 'Study Loops', completed: false, priority: 3}



----------------------------

for…of → Values (Iterables only)

Iterable = something that has a sequence of 

values you can loop over with for...of.
Iterable → Array, String, Map, Set
Not iterable → Plain Object


const arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value);
}

Output: 
a
b
c