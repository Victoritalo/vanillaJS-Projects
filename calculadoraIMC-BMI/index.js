const calcularBtn = document.querySelector("#button_calcular");
const valorResult = document.querySelector(".resultado_valor");
const grauResultado = document.querySelector(".resultado_grau");
let calcResultStyle = document.querySelector(".calc_resultado");

function calcular_imc() {
  let altura = document.querySelector("#altura_usuario").value;
  let peso = document.querySelector("#peso_usuario").value;

  if (altura == "" || peso == "" || altura <= 0 || peso <= 0) {
    alert("Preencha todos os campos!");
    calcResultStyle.setAttribute("style", "display: none");
    window.location.reload()
    return;
  }

  let imc = peso / (altura / 100) ** 2;
  imc = imc.toFixed(1);
  if (imc < 18.5) {
    console.log(imc);
    valorResult.innerHTML = imc;
    grauResultado.innerHTML = "Abaixo do peso ideal";
    calcResultStyle.setAttribute("style", "display: block");
  } else if (imc >= 18.5 && imc <= 24.9) {
    valorResult.innerHTML = imc;
    grauResultado.innerHTML = "Peso normal ou adequado";
    calcResultStyle.setAttribute("style", "display: block");
  } else if (imc >= 30.0 && imc <= 34.9) {
    valorResult.innerHTML = imc;
    grauResultado.innerHTML = "Obesidade Grau I";
    calcResultStyle.setAttribute("style", "display: block");
  } else if (imc >= 35.0 && imc <= 39.9) {
    valorResult.innerHTML = imc;
    grauResultado.innerHTML = "Obesidade Grau II";
    calcResultStyle.setAttribute("style", "display: block");
  } else if (imc >= 40) {
    valorResult.innerHTML = imc;
    grauResultado.innerHTML = "Obesidade Grau III ou Mórbida";
    calcResultStyle.setAttribute("style", "display: block");
  }
}
calcularBtn.addEventListener("click", () => {
  calcular_imc();
});