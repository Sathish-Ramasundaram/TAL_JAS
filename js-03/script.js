async function run() {
  await new Promise(r => setTimeout(r, 2000));
  console.log("Done");
}

run();