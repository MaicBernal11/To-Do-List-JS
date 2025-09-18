
//CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const contCompletedList = document.getElementById("cont-completed-list");


//CREAMOS LA FUNCION QUE NOS PERMITE CREAR UNA NUEVA TAREA APARTIR DEL FORMULARIO
//TODA ETIQUETA QUE VAMOS A CREAR ES A PARTIR DE LA MAQUETA HTML PRE EXISTENTE


//ESTA FUNCION CREA LA ESTRUCTURA DEL HTML Y LA DEJA EN UN LIMBO AUN NO LA INSERTA EN LA PAGINA

function createToDoItem(textItem) {

    //CREAMOS EL NODO O ELEMENTO PADRE

    const item = document.createElement("div");
    item.classList.add("item-to-do");

    //CREAMOS EL NODO HIJO DEL INPUT Y LE AGREGAMOS EL TYPE CHECKBOX

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    //CREAMOS EL SIGUIENTE NODO HIJO <p>
    //A ESTE PARRAFO LE ASIGNO EL VALOR DEL ARGUMENTO DE LA FUNCION ES DECIR LO QUE ESCRIBE EL USUARIO EN EL CAMPO DEL FORMULARIO

    const p = document.createElement("p");
    p.textContent = textItem

    //CREAMOS EL ULTIMO NODO HIJO ,  EL BOTON DE ELIMINAR

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    //ENSAMBLAMOS DENTRO DEL NODO PADRE SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //UTILIZAMOS EL RETURN PARA DAR RESPUESTA DEL ELEMENTO CREADO YA QUE LO USAREMOS EN OTRA FUNCION MAS ADELANTE

    return item;





}


//DETECTAMOS EL EVENTO CLICK SOBRE EL BOTON AGREGAR CON UN ELEMENTO DE ESCUCHA (listener) 
//PARA QUE APARTIR DE ESTE EVENTO SE AGREGUE LA TAREA DENTRO DEL CONTENEDOR #cont-to-do-list
