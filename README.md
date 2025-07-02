# Daily Quote Website

A simple and elegant Daily Quote website built using HTML, CSS, and JavaScript. The website fetches and displays inspirational quotes dynamically using an open API.

## Features

- Displays a new quote every time the page loads or the user requests a new quote.
- Clean and responsive design using CSS.
- Fetches quotes from [The Quotes Hub API](https://thequoteshub.com/api/), an open API for generating quotes.
- Share quotes directly on Threads app with a single click.
- Easy to use and customize.

## Demo

You can see the live demo here: *https://shrutinarad16.github.io/Quotes/*

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Open API: [The Quotes Hub API](https://thequoteshub.com/api/)
- Threads App sharing integration

## How It Works

The website uses JavaScript's `fetch` API to get random quotes from The Quotes Hub API endpoint and displays them on the page.

### Sharing on Threads

Users can share the displayed quote directly to the Threads app using the native sharing URL scheme.

Example API endpoint used:*https://thequoteshub.com/api/*



## Installation & Usage

1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. The quote will automatically load on the page.
4. Click the "New Quote" button (if available) to fetch a new quote from the API.

## Example JavaScript Fetch Code

```javascript
fetch('https://thequoteshub.com/api/')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote').textContent = data.quote;
    document.getElementById('author').textContent = data.author;
  })
  .catch(error => {
    console.error('Error fetching quote:', error);
    document.getElementById('quote').textContent = 'Failed to load quote. Please try again later.';
  });

