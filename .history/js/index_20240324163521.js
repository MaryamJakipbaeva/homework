import { Posts } from './class/Posts.js'

const posts  = new Posts('http://localhost:3001')

const posts_div = document.querySelector('div#posts')


const getPosts = () => {
    posts.getPosts().then(posts => {
        posts.forEach(element => {
          document.createElement
        });
       
    }).catch (error =>{
        alert(error)
    })
}

