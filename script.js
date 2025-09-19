const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

async function fetchPosts() {
    list.innerHTML = '';
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${amount.value}`;
    const response = await fetch(apiUrl);
    const posts = await response.json();

    console.log(posts);
    posts.map(function (post) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        h3.textContent = post.title;
        h3.id = `${post.id}_title`;

        p.textContent = post.body;
        p.id = `${post.id}_body`;

        li.appendChild(h3);
        li.appendChild(p);
        list.appendChild(li);
    })
}

btn.addEventListener("click", fetchPosts)