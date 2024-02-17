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
    document.body.innerHTML = ` <article>
    <h1>${data[0].content}</h1>
<p>-${data[0].author}</p> </article> `;
  })
  .catch((error) => console.error(error));
