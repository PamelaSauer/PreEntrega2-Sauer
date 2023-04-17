//Accede como administrador

const manage = () => {
    const workshops = []
    console.log(workshops)
  
    //Funcion para agregar un workshop
    const addWorkshop = () => {
        const name = prompt("Ingrese el nombre del workshop que desea agregar")
        const startDate = prompt("Ingrese la fecha de inicio")
        const startTime = prompt("Ingrese el horario de la clase")
        const duration = prompt("Ingrese la duración")
        const digit = prompt("Ingrese el número que desea asignarle al workshop")
        const price = prompt("Ingrese el precio del workshop")
        workshops.push({
            name: name,
            startDate: startDate,
            startTime: startTime,
            duration: duration,
            digit: digit
        })
      alert(`Se ha creado el Workshop ${name}, con fecha de inicio ${startDate}, en el horario de ${startTime} con una duración de ${duration} y un valor de ${price}`)
    }

    //Función para ver los workshops disponibles

    const readWorkshops = () => {
        workshops.forEach((workshop) => {
            alert(`Workshop: ${workshop.name}, Fecha de Inicio: ${workshop.startDate}, Horario de clases: ${workshop.startTime}, Duración: ${workshop.duration}, Precio: ${workshop.price}`)
        })

    }

    // Funcion para actualizar un workshop

    const updateWorkshop = () => {
       const digitSearch = prompt("Ingrese el número del Workshop que desea modificar")
       const index = workshops.findIndex(workshop => workshop.digit == digitSearch)
       if(index != -1){
        //Modifica el nombre
        const modifyName = confirm("Desea cambiar el nombre?")
        if(modifyName){
            const nameModified = prompt("Ingrese el nuevo nombre")
            workshops[index].name = nameModified
            alert(`Se ha modificado el nombre a ${nameModified}`)
            }
        //Modifica la fecha de inicio
        const modifyStartDate = confirm("Desea cambiar la fecha de inicio?")
        if(modifyStartDate){
            const dateModified = prompt("Ingrese la nueva fecha")
            workshops[index].startDate = dateModified
            alert(`Se ha modificado la fecha de inicio ${dateModified}`)
            }
        //Modifica el horario
        const modifyStartTime = confirm("Desea cambiar el horario?")
        if(modifyStartTime){
            const timeModified = prompt("Ingrese el nuevo horario")
            workshops[index].startTime = timeModified
            alert(`Se ha modificado el horario a ${timeModified}`)
            }
        } else {
        alert("No existe el workshop seleccionado")
       }
       const modifyPrice = confirm("Desea cambiar el precio?")
       if(modifyPrice){
        const priceModified = prompt("Ingrese el nuevo precio")
        workshops[index].price = priceModified
        alert(`Se ha modificado el precio a ${priceModified}`)
       } else {
        alert("No existe el workshop seleccionado")
       }
    }

    // Funcion para eliminar un workshop

    const deleteWorkshop = () => {
        const digitSearch = prompt("Ingrese el número de workshop que desea eliminar")
        const index = workshops.findIndex(workshop => workshop.digit == digitSearch)
        if(index != -1) {
            workshops.splice(index,1)
        }
        alert("Usted ha eliminado el workshop seleccionado")
    }
  
    //Función para ejecutar
  
    const launch = (stay) => {
      while(stay){
          const effect = prompt("Ingrese qué desea realizar: A: Crear workshop, B: Ver sus workshops disponibles, C: Modificar workshop, D: Eliminar Workshop")
          switch(effect) {
            case "A":
                addWorkshop()
                break
            case "B":
                readWorkshops()
                break
            case "C":
                updateWorkshop()
                break
            case "D":
                deleteWorkshop()
                break
            default:
              alert("La acción seleccionada no es válida")  
        }
        stay = confirm("Desea continuar?")
      }
    }

    launch(true)
  }



// Accede como usuario

const user = () => {
    const workshops = [
        {
            digitWorkshop: 1,
            type: "Fotografía infantil",
            price: "$15.000"
        },
        {
            digitWorkshop: 2,
            type: "Fotografía new born",
            price: "$18.000"
        },
        {
            digitWorkshop: 3,
            type: "Fotografía de paisaje",
            price: "$20.000"
        }
    ]
    let advance = true
    while(advance){
        let digitWorkshop = prompt("Ingrese el N° de Workshop que desea adquirir: 1- Fotografía infantil, 2- Fotografía new born, 3- Fotografía de paisaje")
        let selectedWorkshop = workshops[digitWorkshop - 1]
        let warning = `Usted seleccionó el Workshop ${selectedWorkshop.type}, deberá abonar ${selectedWorkshop.price}`

        if (digitWorkshop === "1" || digitWorkshop === "2" || digitWorkshop === "3") {
            alert(warning)
        } else {
            alert("No ha seleccionado un workshop disponible")
        }
        advance = confirm("Desea continuar?")
    }
}



//Función iniciadora

const start = () => {
    do{
        identify = prompt("Ingrese el N° 1 si es administrador, ingrese el N° 2 si es usuario")
      } while (identify != "1" && identify != "2")

    if (identify === "1") {
        alert("Usted ha ingresado al sistema como administrador")
        manage()
    } else if (identify === "2") {
        alert("Usted ha ingresado al sistema como usuario")
        user()
    } else {
        alert("El valor ingresado es incorrecto")
    }
}

start()


