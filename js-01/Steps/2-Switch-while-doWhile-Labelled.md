Switch: 

let priority = 1;

switch (priority) {

   case 1:
    console.log("Send alert + assign immediately");
    break;
  
  case 2:
    console.log("Assign to sprint");
    break;

    case 3:
    console.log("Add to backlog");
    break;


  default:
    console.log("Needs manual review");
}


Output: 
Send alert + assign immediately


2. while     = check before entering room

Eg: 

let totalTasks = 5;

while (totalTasks > 0) {
  console.log("Processing pending data:", totalTasks);
  totalTasks--;
}



3. do while  = enter room once, then check


let totalTasks = 5;

do
{
  console.log("Processing pending data:", totalTasks);
  totalTasks--;
} while (totalTasks > 0) 


Looks same. Change the value to 0, -1 and see the difference. 
while → check → run
do…while → run → check

Real World Scenario for do..while — Show Menu At Least Once 📋
📌 Situation
App menu must display once before user decides to exit.

✅ Code
let choice;

do {
  console.log("Showing menu to user");
  choice = "exit"; // simulate user choice
} while (choice !== "exit");

----------------

4. Labelled Statement:
A labelled statement gives a name to a loop or block so you can control it using break or continue.

label = named loop exit
break label = exit that loop
continue label = jump to next round of that loop


Basic Syntax:

labelName:
for (...) {
  ...
}



Without Label: 

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 1) break;
    console.log(i, j);
  }
}


Output: 
Blank

if j === 2
Output: 
1 1
2 1
3 1
4 1
5 1

if j === 3

1 1
1 2
2 1
2 2
3 1
3 2
4 2
5 1
5 2


break → stops only INNER loop
outer loop continues


With Label:

outer:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}

Output:
when j === 2
1 1

When j === 3
1 1
1 2


break outer → stops the named outer loop
everything stops immediately

---------------------

Label + continue Example (Simple)

Skip to next outer loop round.

outer:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outer;
    console.log(i, j);
  }
}

Output
1 1
2 1
3 1


When j = 2 → jump to next i