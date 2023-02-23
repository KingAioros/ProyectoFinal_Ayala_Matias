let objectoSessionStorage = false;
let inactivo = setTimeout(mensajeInactivo, 30000);
objectoSessionStorage = sessionStorage.getItem("modoOscuro");

//Modo oscuro
let modoOscuro = () => {
    document.body.className = "oscuro";
    document.querySelector("header").setAttribute("class",'d-flex justify-content-center align-items-center align-self-baseline navOscuro');
    document.querySelector("header > nav").setAttribute("class",'navbar navbar-expand-lg navOscuro');
    document.querySelector("footer").setAttribute("class",'gridFooter navOscuro');
}

if(objectoSessionStorage == 'true'){
    modoOscuro();
    console.log(objectoSessionStorage);
}

function activarModoOscuro() {

    if (document.getElementById("modoOscuro").checked) {
        modoOscuro();
        sessionStorage.setItem('modoOscuro', true);
        objectoSessionStorage = sessionStorage.getItem("modoOscuro");
        console.log(sessionStorage);
    }

    else {
        document.body.removeAttribute('class');
        document.querySelector("header").setAttribute("class",'d-flex justify-content-center align-items-center align-self-baseline bg-light');
        document.querySelector("header > nav").setAttribute("class",'navbar navbar-expand-lg bg-light');
        document.querySelector("footer").setAttribute("class",'gridFooter');
        sessionStorage.removeItem('modoOscuro');
        objectoSessionStorage = sessionStorage.getItem("modoOscuro");
        console.log(sessionStorage);
    }
}
document.getElementById("modoOscuro").addEventListener('change', activarModoOscuro);

//Mensaje inactivo
function mensajeInactivo() {
    Swal.fire({
        text: '¿Te encuentras ahí?',
        showCancelButton: false,
        showConfirmButton: true,
    })
}

function reiniciarContador() {
    clearTimeout(inactivo);
    inactivo = setTimeout(mensajeInactivo, 30000);
}

 document.addEventListener("mousemove", reiniciarContador)
