
class Posts {
    constructor(url) {
        this.url = url;
    }
    async getPosts() {
        
        return [{ id: 1, message: 'Task 1' }, { id: 2, message: 'My task  2' }];
    }
    async addPost(message) {
       
        return { id: Date.now(), message };
    }
    async removePost(id) {
        
        return id;
    }
}

const posts = new Posts('http://localhost:3001');
const posts_div = document.querySelector('div#posts');
const message_input = document.querySelector('input');

const renderPost = (post) => {
    const postArticle = document.createElement('article');
    postArticle.dataset.key = post.id.toString();

    const postP = document.createElement('p');
    postP.textContent = post.message;

    const postSpan = document.createElement('span');
    const postLink = document.createElement('a');
    postLink.innerHTML = '<i class="bi bi-trash"></i>';
    postLink.addEventListener('click', (event) => {
        posts.removePost(post.id)
            .then(removedId => {
                const articleToRemove = document.querySelector(`[data-key='${removedId}']`);
                if (articleToRemove) {
                    posts_div.removeChild(articleToRemove);
                }
            })
            .catch(error => {
                console.error(error);
                alert('Error occurred while removing the task.');
            });
    });
    postSpan.appendChild(postLink);

    postArticle.appendChild(postP);
    postArticle.appendChild(postSpan);

    posts_div.appendChild(postArticle);
};

const getPosts = () => {
    posts.getPosts()
        .then(messages => {
            messages.forEach(node => {
                renderPost(node);
            });
        })
        .catch(error => {
            console.error(error);
            alert('Error occurred while fetching tasks.');
        });
};

message_input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const message_text = message_input.value.trim();
        if (message_text !== '') {
            posts.addPost(message_text)
                .then(post => {
                    renderPost(post);
                    message_input.value = '';
                    message_input.focus();
                })
                .catch(error => {
                    console.error(error);
                    alert('Error occurred while adding the task.');
                });
        }
    }
});

getPosts();
