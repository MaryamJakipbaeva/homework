import { Posts } from './class/Posts.js'

const posts  = new Posts('http://localhost:3001')

const posts_div = document.querySelector('div#posts')


const getPosts = () => {
    posts.getPosts().then(posts => {
        posts.forEach(element => {
          const post_article = posts_div.appendChild(document.createElement('article'))
          const post_p = post_article
        });
       
    }).catch (error =>{
        alert(error)
    })
}

