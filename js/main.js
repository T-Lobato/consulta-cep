const btnPesquisarCEP = document.querySelector("#btnPesquisar");
const btnLimparDados = document.querySelector("#btnLimpar");

let rua = document.querySelector("#rua");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");
let inputDoCep = document.querySelector("#cep");


btnPesquisarCEP.addEventListener("click", event => {
    event.preventDefault();

    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json`;

    fetch(url).then(response => {
        return response.json();
    })

        .then(data => {
            if (data.erro) {
                alert("O CEP DIGITADO NÃO É VÁLIDO!");
                return;
            }
            atribuirCampos(data);
        })
});

btnLimparDados.addEventListener("click", event => {
    event.preventDefault();

    inputDoCep.value = "";
    rua.value = "";
    cidade.value = "";
    estado.value = "";
});


function atribuirCampos(data) {

    rua.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}
