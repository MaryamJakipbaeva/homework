import { Posts } from './class/Posts.js'

const posts  = new Posts('http://localhost:3001')

const posts_div = document.querySelector('div#posts')
const message_input

const render_post_article = (post) => {
    const post_article = posts_div.appendChild(document.createElement('article'))
    const post_p = post_article.appendChild(document.createElement('p'))
    post_p.innerHTML = node.getMessage()
}

const getPosts = () => {
    posts.getPosts().then(messages => {
        messages.forEach(node => {
          render_post_article(node)
        });
       
    }).catch (error =>{
        alert(error)
    })
}
getPosts()

