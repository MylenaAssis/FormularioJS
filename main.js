//seleciona o form pelo id
const form = document.getElementById("form-deposito")

//função validar nome completo
function ValidaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

//removendo o comportamento default do formulario de atualizar a página ao clicar no botão
//atributo do elemento que vai fazer isso: nome.addEventListener(evento, função)
form.addEventListener('submit', function(e) {
    //validaçao do formulario
    let formEValido = false;
    e.preventDefault();


    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente ${nomeBeneficiario.value} - conta ${numeroConta.value}`

    formEValido = ValidaNome(nomeBeneficiario.value);
    if (formEValido) {
        alert(mensagemSucesso)
    } else {
        alert("Digite o nome completo.")
    }
})