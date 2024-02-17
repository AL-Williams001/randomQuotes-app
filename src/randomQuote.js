export default async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

getRandomQuote()
  .then((data) => {
    const quoteHTML = `
    <article>
      <h1>${data[0].content}</h1>
      <p>-${data[0].author}</p>
    </article>
    <button id="get-quote" class="get-quote">Get Quote</button>
  `;
    document.body.innerHTML = quoteHTML;

    // Add event listener using event delegation
    document.body.addEventListener("click", async (event) => {
      if (event.target.matches("#get-quote")) {
        const newData = await getRandomQuote();
        const newQuoteHTML = `
        <article>
          <h1>${newData[0].content}</h1>
          <p>-${newData[0].author}</p>
        </article>
        <button id="get-quote" class="get-quote">Get Quote</button>
      `;
        document.body.innerHTML = newQuoteHTML;
      }
    });
  })
  .catch((error) => console.error(error));
