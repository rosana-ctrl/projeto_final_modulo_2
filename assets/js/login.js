$(document).ready(function () {
    $("#btnStart").click((event) => {
        if ($("#formLogin").valid()) {
            event.preventDefault();
            location.replace("../index.html")
        }
    })
})