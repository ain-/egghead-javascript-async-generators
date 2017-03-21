function* createCounter() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const counter = createCounter()
for (let i of counter) {
  console.log(i);
}
