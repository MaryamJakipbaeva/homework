const posts_div = document.querySelector('div#posts')

fetch('http://localhost:3001')
.then(response=> response.json())
.then(json => {
    const postposts_div.appendChild(document.createElement('<article>'))
}), (error) => {
    alert(error)
}