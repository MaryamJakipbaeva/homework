import {Post} rfrom './Post.js'

class Posts{
#posts = []
#backend_url = ''

constructor(url) {
    this.#backend_url = url
}

getPosts = () => {
    return new Promise (async(resolve, reject) => {
        fetch("http://localhost:3001')
       .then(response=> response.json())
       .then(json => {
           json.forEach(node => {
        const post_article = posts_div.appendChild(document.createElement('article'))
        const post_p = post_article.appendChild(document.createElement('p'))
    post_p.innerHTML = node.message
    });
    
}), (error) => {
    alert(error)
}
    })
}
}