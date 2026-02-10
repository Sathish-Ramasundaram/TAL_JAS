try {
  let x = y + 1;   // y not defined → error
} catch (err) {
  console.log("Error caught:", err.message);
}

console.log("App still running");
