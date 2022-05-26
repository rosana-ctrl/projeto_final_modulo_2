
const btn = document.querySelector('#btn1')
const popup = document.querySelector('#pop-wrapper')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    popup.style.display = 'block'
      
})


popup.addEventListener('click', () => {
    
    const className = event.target.classList[0]
    if(className === 'popup-close' || className === 'popup-btn' ||  className === 'popup-wrapper') {
       
        popup.style.display = 'none'
    }

})

