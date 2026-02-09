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

let tasksLeft = 3;

while (tasksLeft > 0) {
  console.log("Processing task");
  tasksLeft--;
}



3. do while  = enter room once, then check

let attempts = 1;

do {
  console.log("Checking access attempt", attempts);
  attempts++;
} while (attempts <= 3);