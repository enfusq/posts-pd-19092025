const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

async function fetchPosts() {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${amount.value}`;
    const response = await fetch(apiUrl);
    const posts = await response.json();
}

btn.addEventListener("click", fetchPosts)