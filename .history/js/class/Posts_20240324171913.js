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
            this.#readJson(json)
            resolve(this.#posts)
            
        }), (error) => {
            reject(error)
        }
    })
}

addPost = () => {
    return new Promise(async(resolve, reject) => {
        const json
        fetch(this.#backend_url  + '/new',{
            method: 'post',
            headers: {'Content-Type':'application/json'}
        })
    })
}


#readJson = (json) => {
    json.forEach(node => {
        const post = new Post(node.id,node.message)
      
        this.#posts.push(post)
    });
    
}
}

export { Posts }