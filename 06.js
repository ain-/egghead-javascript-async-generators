const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch(url);
  const quote = yield response.json();
  return `${quote.quoteText} - ${quote.quoteAuthor}`;
}

const quoteFetcher = createQuoteFetcher();
quoteFetcher.next().value
  .then(res => quoteFetcher.next(res).value)
  .then(res => quoteFetcher.next(res).value)
  .then(quote => console.log(quote))
  .catch(err => console.log(err));
