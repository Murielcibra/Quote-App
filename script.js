"use strict";

const api = "https://dummy-apis.netlify.app/api/quote";
const btn = document.getElementById("btn");
const state = {
  quotes: [
    {
      quote: "Hotpink oder DodgerBlue ",
      author: "-Nico",
    },
  ],
};

btn.addEventListener("click", getQuote);
render();

function renderItem(quote, author) {
  // Li Element
  const newLi = document.createElement("li");
  newLi.innerText = quote;
  // Styling
  newLi.classList.add("quote-item");
  // author
  const authorEl = document.createElement("small");
  authorEl.innerText = author;
  // Styling author
  authorEl.classList.add("quote-item-author");
  newLi.append(authorEl);
  return newLi;
}
function render() {
  const quoteListUl = document.getElementById("list-quotes");
  quoteListUl.innerHTML = "";

  for (let quote of state.quotes) {
    const newQuotItem = renderItem(quote.quote, quote.author);
    quoteListUl.append(newQuotItem);
  }
}

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const quote = {
        quote: data.quote,
        author: "-" + data.author,
      };
      state.quotes.push(quote);
      render();
    });
}
