Asynchronous programming
Understanding concepts like callbacks, promises, and async/await, and how to handle asynchronous code execution in JavaScript.


Callback:
👉 A function passed as an argument to another function,
👉 which is executed later.

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function done() {
  console.log("Greeting finished");
}

greet("Sathish", done);


Output: 
Hello Sathish
Greeting finished


done is the callback
It is passed into greet
It is called later inside greet