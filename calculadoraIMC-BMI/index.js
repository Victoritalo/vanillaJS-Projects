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
}
calcularBtn.addEventListener("click", () => {
  calcular_imc();
});