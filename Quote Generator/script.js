const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweeterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    var quote = await response.json()


    // Output the quote and author name
    console.log(quote.content)
    console.log(`- ${quote.author}`)


    quoteText.textContent = quote.content;
    authorText.textContent = quote.author;
}
randomQuote();

function tweetOne() {
    let link = `http://twitter.com/intent?text=${quote.content} -${quote.author}`;
    window.open(link, '_blank');
}

tweeterBtn.addEventListener('click', tweetOne)
newQuoteBtn.addEventListener('click', randomQuote)