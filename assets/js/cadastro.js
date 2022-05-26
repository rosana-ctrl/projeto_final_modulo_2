function limpa_formulário_cep(showMessage = false) {
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");

    if (showMessage)
        alert("CEP não encontrado.")
}

function redirecione(path) {
    window.location.replace(path);
}

$(document).ready(function () {
    $("#cep").blur(function () {
        limpa_formulário_cep()

        let cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {
            let validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                $.getJSON('https://viacep.com.br/ws/' + cep + '/json/?callback=?', function (dados) {
                    if (!("erro" in dados)) {
                        $("#rua").val(dados.logradouro)
                        $("#bairro").val(dados.bairro)
                        $("#cidade").val(dados.localidade)
                        $("#uf").val(dados.uf)
                    } else {
                        limpa_formulário_cep(true)
                    }
                })
            } else {
                limpa_formulário_cep(true)
            }
        }
    });

    $("#btnSubmit").click(function (e) {
        e.preventDefault();

        if ($("#registrationForm").valid()) {
            $("#registrationForm field").val("");
            $("#pop-wrapper").show();
        }
    });

    $("#pop-wrapper").click(function (e) {
        $("#pop-wrapper").hide();
    })
});