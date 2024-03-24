const posts_div = document.querySelector('div#posts')

fetch('http://localhost:3001')
.then(response=> response.json())
.then(json => {
    console.log(json)
    json.forEach(node => {
        const post_article = posts_div.appendChild(document.createElement('<article>'))
    post_article.innerHTML = node.message
    });
    
}), (error) => {
    alert(error)
}