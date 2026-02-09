Switch: 

let priority = 2;

switch (priority) {
  case 1:
    console.log("Low");
    break;

  case 2:
    console.log("Medium");
    break;

  case 3:
    console.log("High");
    break;

  default:
    console.log("Unknown");
}


Output: 
Medium



2. while     = check before entering room

Eg: 

let totalTasks = 5;

while (totalTasks > 0) {
  console.log("Processing pending data:", totalTasks);
  totalTasks--;
}



3. do while  = enter room once, then check

let attempts = 1;

do {
  console.log("Checking access attempt", attempts);
  attempts++;
} while (attempts <= 3);


let attempts1 = 1;

while (attempts1 <= 3) {
  console.log("Checking access attempt using while", attempts1);
  attempts1++;
}


Looks same. Change the value of attempts and attempts1 to 10 and see the difference. 
while → check → run
do…while → run → check

----------------

4. Labelled Statement:
A label is a name you give to a loop or block so you can control it with break or continue.
label = named loop exit
break label = exit that loop
continue label = jump to next round of that loop
