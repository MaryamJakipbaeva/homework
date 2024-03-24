import { Posts } from './class/Posts.js'

const posts  = new Posts('http://localhost:3001')

const posts_div = document.querySelector('div#posts')
const message_input = document.querySelector('input')



const render_post_article = (post) => {
    const post_article = posts_div.appendChild(document.createElement('article'))
    post_article.setAttribute('data-key', post.getId().toString())
    render_post_p(post_article,post.getMessage())
}

const render_post_p = (parent_element, message) =>{
    const post_p = parent_element.appendChild(document.createElement('p'))
    post_p.innerHTML = message
    render_post_span(post_p)
}


const render_post_span = (parent_element) =>{
    const post_span = parent_element.appendChild(document.createElement('span'))
    render_post_link(post_span)
}

const render_post_link = (parent_element) =>{
    const post_a = parent_element.appendChild(document.createElement('a'))
    post_a.innerHTML = "delete"
    post_a.addEventListener('click', (event))
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


message_input.addEventListener('keypress',(event) =>{
    if(event.key === "Enter") {
        event.preventDefault()
        const message_text = message_input.value.trim()
        if (message_text!=='') {
            posts.addPost(message_text).then(post =>{
               render_post_article(post)
               message_input.value = ''
               message_input.focus()
            })
        }
    }
})

getPosts()

