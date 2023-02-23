let horarios = [
  {
    id: 1,
    fila:"filaUno",
    día: "Lunes",
    nombre: "Adultos Mayores",
    horario: "10 am - 11 am",
    profe: "Marcela Allende",
    intensidad: "Baja"
    },
    {
    id: 2,
    día: "Martes",
    fila:"filaDos",
    nombre: "Boxeo",
    horario: "6 pm - 7 pm",
    profe: 'Néstor "TITO" Giovanni',
    intensidad: "Alta"
    },
    {
    id: 3,
    fila:"filaTres",
    día: "Miercoles",
    nombre: "Funcional - Circuito",
    horario: "6 pm - 7 pm",
    profe: "Agustina Gimenez",
    intensidad: "Media"
    },
    {
    id: 4,
    fila:"filaCuatro",
    día: "Jueves",
    nombre: "Boxeo",
    horario: "7 pm - 8 pm",
    profe: 'Néstor "TITO" Giovanni',
    intensidad: "Alta"
    },
    {
    id: 5,
    fila:"filaCinco",
    día: "Viernes",
    nombre: "Circuito",
    horario: "3 pm - 4 pm",
    profe: "Agustina Gimenez",
    intensidad: "Alta"
    },
    {
    id: 6,
    fila:"filaSeis",
    día: "Sabado",
    nombre: "Zumba",
    horario: "8 pm - 9 pm",
    profe: "Agustina Gimenez",
    intensidad: "Baja - Media"
    }
]
  let lunes = document.getElementById("A1");
  let martes = document.getElementById("A2");
  let miercoles = document.getElementById("A3");
  let jueves = document.getElementById("A4");
  let viernes = document.getElementById("A5");
  let sabado = document.getElementById("A6");
  
   lunes.onclick = () =>{
    const id = 1;
    renderClase(id);
    className(id);
   }

    martes.onclick = () =>{
      const id = 2;
      renderClase(id);
      className(id);
   }

   miercoles.onclick = () =>{
    const id = 3;
    renderClase(id);
    className(id);
     }

   jueves.onclick = () =>{
    const id = 4;
    renderClase(id);
    className(id);
     }
   viernes.onclick = () =>{
    const id = 5;
    renderClase(id);
    className(id);
     }
   sabado.onclick = () =>{
    const id = 6;
    renderClase(id);
    className(id);
     }
  
  function renderClase(id){
    const container = document.getElementById("filaE");
    let buscarClase = horarios.find(clase => clase.id ===id)
    return container.innerHTML = `
                                  <td class="f${buscarClase.id}Uno">${buscarClase.nombre}</td>
                                  <td class="f${buscarClase.id}Dos">${buscarClase.horario}</td>
                                  <td class="f${buscarClase.id}Tres">${buscarClase.profe}</td>
                                  <td class="f${buscarClase.id}Cuatro">${buscarClase.intensidad}</td>`
  }

  function className(id){
    let buscarClase = horarios.find(clase => clase.id ===id)
    document.querySelector("#filaE > tr").className = `${buscarClase.fila}`
  }