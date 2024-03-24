const posts_div = document.querySelector('div#posts')

fetch('http://localhost:3001')
.then(response=> response.json())
.then(json => {
    json
    const post_article = posts_div.appendChild(document.createElement('<article>'))
    post_article.innerHTML = json.text
}), (error) => {
    alert(error)
}