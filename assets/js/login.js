
/* Poupap ao solicitar recuperação de senha*/
const btn = document.querySelector('#btn-popup')
const popup = document.querySelector('#pop-wrapper')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const className = event.target.classList[0]
    if (className === 'popup-close' || className === 'popup-btn' || className === 'popup-wrapper') {

        popup.style.display = 'none'
    }
})

$("#pop-wrapper").click(function (e) {
    $("#pop-wrapper").hide();
})

$(document).ready(function () {
    $("#btnStart").click((event) => {
        if ($("#formLogin").valid()) {
            event.preventDefault();
            location.replace("../index.html")
        }
    })
})

