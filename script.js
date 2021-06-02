feather.replace()

const nextEl = document.getElementById("next");
const previousEl = document.getElementById("previous");
const sliderEl = document.getElementById("slider");
const imgWidth = sliderEl.offsetWidth;

nextEl.addEventListener("click", onNextClick);
previousEl.addEventListener("click", onPreviousClick);

function onNextClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += imgWidth;
}

function onPreviousClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= imgWidth
}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");

function validaFormulario(){
  if(nome.value != "" &&
    email.value != "" &&
    telefone.value != ""){
      alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
      alert("Por favor, preencha os campos nome, email e telefone!")
  }
}
