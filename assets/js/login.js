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

