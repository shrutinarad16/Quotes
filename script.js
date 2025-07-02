const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btnquote = document.getElementById("btnquote");
const btnthread = document.getElementById("btnthread");

const URL = "https://thequoteshub.com/api/";

async function getQuote(url) {
    const response = await fetch(URL);
    var data = await response.json();
    console.log(data); 
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
}

getQuote(URL);

btnquote.addEventListener("click", () => {
    getQuote(URL);
});

function tweet() {
    const tweetUrl = `https://threads.net/intent/post?text=${quote.innerHTML} ---by ${author.innerHTML}`;
    window.open(tweetUrl, "_blank");
}

btnthread.addEventListener("click", () => {
    tweet();
});