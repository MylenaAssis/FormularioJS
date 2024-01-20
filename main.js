//seleciona o form pelo id
const form = document.getElementById("form-deposito")
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

//função validar nome completo
function ValidaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

//removendo o comportamento default do formulario de atualizar a página ao clicar no botão
//atributo do elemento que vai fazer isso: nome.addEventListener(evento, função)
form.addEventListener('submit', function(e) {
    //validaçao do formulario
    e.preventDefault();


    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroConta.value}</b>`

    formEValido = ValidaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';
        
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formEValido = ValidaNome(e.target.value);
    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.style = 'none';
        document.querySelector('.error-message').style.display = '';
    }
})