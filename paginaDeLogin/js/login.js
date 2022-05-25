/*onclick para direcionar para página de cadastro e recuperação de senha*/
function cadastro() {
    location.assign("../cadastro.html");
}
function recuperarSenha() {
    location.assign("./recuperarSenha.html");
}
function home() {
    location.assign("./recuperarSenha.html");
}

/* Poupap ao solicitar recuperção de senha*/
const btn = document.querySelector('#btn')
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