const list = document.querySelector('ul')
const input = document.querySelector('input')

input.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        event.prevent
    }
})