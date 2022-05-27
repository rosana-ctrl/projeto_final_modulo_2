$(document).ready(function () {
    const btnRecuperarSenha = document.querySelector('#btnRecuperarSenha')
    const popup = document.querySelector('#pop-wrapper')

    btnRecuperarSenha.addEventListener('click', (e) => {
        e.preventDefault()

        if ($("#formRecuperarSenha").valid()) {
            popup.style.display = 'block'
        }
    })

    popup.addEventListener('click', event => {
        const className = event.target.classList[0]
        if (className === 'popup-close' || className === 'popup-btn' || className === 'popup-wrapper') {

            popup.style.display = 'none'
        }
    })
})