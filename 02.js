function* createHello() {
  const word = yield 'test';
  console.log(word);
}

const hello = createHello();
console.log(hello.next());
console.log(hello.next('send'));
