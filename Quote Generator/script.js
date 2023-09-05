async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()


    // Output the quote and author name
    console.log(quote.content)
    console.log(`- ${quote.author}`)

    const quoteContainer = document.getElementById("quote-container");
    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const twitterBtn = document.getElementById("twitter");
    const newQuoteBtn = document.getElementById("new-quote");

    quoteText.textContent = quote.content;
    authorText.textContent = quote.author;
}
randomQuote();

