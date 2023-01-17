async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var response = await consultaCEP.json();
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = response.localidade;
        logradouro.value = response.logradouro;
        estado.value = response.uf;

    } catch (erro) {
        console.log(erro);
        mensagemErro.innerHTML = `<p>CEP inválido, Tente novamente!</p>`
    }
} 

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

