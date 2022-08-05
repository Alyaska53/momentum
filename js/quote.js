const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getQuotes() {  
  const quotes = `./json/quotes_${pageLanguage}.json`;
  const res = await fetch(quotes);
  const data = await res.json();

  let randomQuote = getRandomNum(1, 61);

  quote.innerText = data[randomQuote]['quote'];
  author.innerText = data[randomQuote]['author'];
}

changeQuote.addEventListener('click', () => {
  getQuotes();
});

getQuotes();