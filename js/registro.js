//Variables
let persona = 0;
let email = false;
let formEnviar = document.getElementById("fEnviarCont");
//Se crean objetos
let crearPersona = () => { persona = new Persona ({ nombre: userName, apellido: userLastName, usuario: user, email: userMail, password: userPassword });}

//Object
class Persona{
  constructor(literal){
    this.nombre = literal.nombre;
    this.apellido = literal.apellido;
    this.usuario = literal.usuario;
    this.email = literal.email;
    this.password = literal.password;
  }
}
    //Alerta mail
const alertMail = (leyenda,correo,icon) => {
    Swal.fire({
    title: `'Correo ${leyenda}'`,
    text: `"La dirección de email ${correo} es ${leyenda}!."`,
    icon: `${icon}`,
    showConfirmButton: true,
  })
    }

const datosError = (mensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        showConfirmButton: true,
        text: `${mensaje}`,
      })
}

const registroExitoso = () => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Registro completado con exito',
    showConfirmButton: true,
    timer: 1500,
    timerProgressBar: true
  })
  window.location="../page/loginWelcome.html";
}

    //Validar correo
const validarEmail = (valor) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
       alertMail("válido", valor, 'success');
     email = true;
    } else {
       alertMail("invalido", valor, 'error');
     email = false;
    }
   }

   //Registrar datos
function registrar(){
     userName = document.getElementById("name").value;
     userLastName = document.getElementById("lastName").value;
     user = document.getElementById("usuario").value;
     userMail = document.getElementById("mail").value;
     userPassword = document.getElementById("password").value;
     let userPasswordVerificar = document.getElementById("password2").value;

    if ((userName && userLastName && user &&userMail && userPassword && userPasswordVerificar != " ")&&(userPassword === userPasswordVerificar)){
        validarEmail(userMail)
        if (email == true){
        crearPersona();
        const enJSON = JSON.stringify(persona);
        localStorage.setItem(`Usuario:${user}`, enJSON)
        localStorage.setItem(`Correo:${userMail}`, enJSON)
        registroExitoso();
        }
        else {
        console.log("correo invalido")
        }
    }
    else if(userPassword != userPasswordVerificar){
        datosError("Verifique el password");
    }
    else {
        datosError("Contiene campos sin completar");
    }
}

//Ejecutar codigo
// formEnviar.onclick = () => {
//     registrar();
// }