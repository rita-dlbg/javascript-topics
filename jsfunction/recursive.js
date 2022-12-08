let result = 0;
let count = 0;

while (result !== 5) {
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count++;
}

console.log(`The random result: ${result}`);
console.log(`How many times random is executed: ${count}`);