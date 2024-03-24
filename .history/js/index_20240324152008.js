const posts_div = document.querySelector('div#posts')

fetch('http://localhost:3001')
.then(response=> response.json())
.then(json => {
    const posts_div_.appendChild(document.createElement('<article>'))
}), (error) => {
    alert(error)
}