const posts_div = document.querySelector('div#posts')

fetch('http://localhost:3001')
.then(response=> response.json())
.then(json => {
    json.array.forEach(node => {})
    
}), (error) => {
    alert(error)
}