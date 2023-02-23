
function login(){
    let datoSesion = document.getElementById("nameLogin").value;
    let passSesion = document.getElementById("passwordLogin").value;
    if (datoSesion == "" && passSesion == ""){
        datosError("Ingrese los datos necesarios para iniciar sesión");
    }
    if(datoSesion != "" && passSesion == ""){
        datosError("Ingrese una contraseña");
    }
    if(datoSesion == "" && passSesion != ""){
        datosError("Ingrese un usuario o email valido");
    }
    if (datoSesion != "" && passSesion != ""){
        validarEmailDato(datoSesion);
        if(emailDato == true){
                     let datoMail = JSON.parse(localStorage.getItem(`Correo:${datoSesion}`));
                     if (datoMail == null){
                         datosError(`"No se encontro el Email: ${datoSesion}"`);
                     }
                     else {
                         if(datoMail.password == passSesion){
                            console.log("pass correcto")
                            window.location="../page/loginWelcome.html";
                         }
                         else {
                            datosError(`"La contraseña ingresada es incorrecta"`);
                         }
                     }
        }
        if (emailDato == false){
                    let datoUser = JSON.parse(localStorage.getItem(`Usuario:${datoSesion}`));
                    if(datoUser == null){
                        datosError(`"No se encontro el usuario ${datoSesion}"`);
                    }
                    else {
                        if(datoUser.password == passSesion){
                           console.log("pass correcto")
                           window.location="../page/loginWelcome.html";
                        }
                        else {
                           datosError(`"La contraseña ingresada es incorrecta"`);
                        }
                    }
        }
    }
}
