let emailDato = false;
let buscar = document.getElementById("buscar");

//Validar correo
const validarEmailDato = (valor) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     emailDato = true;
    } else {
     emailDato = false;
    }
   }

const mostrarBusqueda = (mbusqueda,password) => {
    
    Swal.fire({
        title: `Su Usuario o email es :${mbusqueda}`,
        text: `Password: ${password}`,
        showConfirmButton: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

let buscarDato = () => {
    let datoBuscado = document.getElementById("nameBuscado").value;
    let emailBuscado = document.getElementById("mailBuscado").value;
    if (datoBuscado == "" && emailBuscado == ""){
        datosError("Ingrese un valor a buscar");
    }
    if (datoBuscado != "" && emailBuscado != ""){
        datosError("Ingrese solo un valor a buscar");
    }
    if(emailBuscado != "" && datoBuscado == "") {
        validarEmailDato(emailBuscado);
        if(emailDato == true){
            let datoMail = JSON.parse(localStorage.getItem(`Correo:${emailBuscado}`));
            if (datoMail == null){
                datosError(`"No se encontro el Email: ${emailBuscado}"`);
            }
            else {
                mostrarBusqueda(datoMail.usuario,datoMail.password);
            }
        }
        else if (emailDato == false){
            alertMail("invalido", `"${emailBuscado}"`, 'error');
        }
    }
     else if(datoBuscado != "" && emailBuscado == ""){
        validarEmailDato(datoBuscado);
        if(emailDato == false){
            let datoUser = JSON.parse(localStorage.getItem(`Usuario:${datoBuscado}`));
            if(datoUser == null){
                datosError(`"No se encontro el usuario ${datoBuscado}"`);
            }
            else{
                mostrarBusqueda(datoUser.usuario,datoUser.password);
            }
        }
        else if (emailDato == true){
            datosError(`"El dato ${datoBuscado} es un Email, ingreselo en la casilla correcta"`)
        } 
     }
}

// buscar.onclick = () => {
//     buscarDato();
// }