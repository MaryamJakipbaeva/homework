import {Post} rfrom './Post.js'

class Posts{
#posts = []
#backend_url = ''

constructor(url) {
    this.#backend_url = url
}

getPosts = () => {
    return new Promise (async(resolve, reject) => {
        fetch(this.#backend_url)
        .then(response=> response.json())
        .then(json => {
            
            
        }), (error) => {
            reject(error)
        }
    })
}
#readJson = (json) => {
    json.forEach(node => {
        const post = new post(node.id,node.message)
    })
}
}