outer:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j === 3) break outer;
    console.log(i, j);
  }
}
