function cadastrar(event) {
    //Não envie o formulário
    event.preventDefault();
}

function buscar(event) {
    // Buscar pelo CEP
    if (event.key == "Enter") {
        //Variaveis que referenciam
        //os elementos do HTML
        const logradouro = document.getElementById("logradouro");
        const bairro = document.getElementById("bairro");
        const cidade = document.getElementById("cidade");
        const estado = document.getElementById("estado");
        const uf = document.getElementById("uf");

        const cep = document.getElementById("cep")

        const url = `https://viacep.com.br/ws/${cep.value}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(dados => {
                logradouro.value = dados.logradouro;
                bairro.value = dados.bairro;
                cidade.value = dados.localidade;
                estado.value = dados.uf;
                uf.value = dados.uf;
            });
    }
}