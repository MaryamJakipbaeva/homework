import { Posts } from './class/Posts.js'

const posts  = new Posts('http://localhost:3001')

const posts_div = document.querySelector('div#posts')

const render_post_article = (post) => {

}

const getPosts = () => {
    posts.getPosts().then(messages => {
        messages.forEach(node => {
          
        });
       
    }).catch (error =>{
        alert(error)
    })
}
getPosts()

