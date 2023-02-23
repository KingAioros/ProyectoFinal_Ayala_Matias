const alertImc = (leyenda,descrip) => {
    Swal.fire({
        title: `Su IMC actual es: "${leyenda}"`,
        text: `${descrip}`,
        width: 600,
        padding: '5rem',
        color: '#716add',
        background: '#FFFFFF',
        backdrop: `
          rgba(223, 255, 255)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left center
          no-repeat
        `
      })
}

//fetch con ruta relativa
const getDatos = async (dato) => {
    const resp = await fetch('../js/imcdatos.json')
         .then((res) => res.json())
         .then((data) => {
            let datoJson = data.find(e => e.id === `${dato}`);
            console.log(datoJson.imcDescripcion);
            alertImc(imc,datoJson.imcDescripcion);
         })
 }


let bodyCheck = () => {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imcDecimales = (peso) / (altura * altura);
    imc = imcDecimales.toFixed(1);
    if (imc < 18.5) {
        console.log("IMC 1")
            getDatos("1");
        }
        if (imc >= 18.5 && imc <= 24.9) {
            console.log("IMC 2")
            getDatos("2");
        }
        if (imc >= 25 && imc <= 34.9) {
            console.log("IMC 3")
            getDatos("3");
        }
        if (imc >= 35 && imc <= 39.9) {
            console.log("IMC 4")
            getDatos("4");
        }
        if (imc >= 40) {
            console.log("IMC 5")
            getDatos("5");
        }
}