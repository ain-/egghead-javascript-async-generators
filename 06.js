const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} - ${quote.quoteAuthor}`;
}

const coroutine = (gen) => {
  const generator = gen();
  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)));
  }
  return handle(generator.next());
}

const quoteFetcher = coroutine(createQuoteFetcher);
quoteFetcher.then(quote => console.log(quote));
