function* createHello() {
  try {
    const word = yield 'test';
    console.log(`Hello ${word}`);
  } catch (err) {
    console.log('ERROR', err);
  }

}

const hello = createHello();
console.log(hello.next());
// ...
hello.throw('Something went wrong');
console.log(hello.next('send'));
