/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */


// EJERCICIO 2.1 Importar las funciones correspondientes
import { listaPrestamos,listaSocios,imgPrestamos,imgSocios } from "./funciones.js";


// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
function listadoPrestamos() {
    const listar=document.querySelector('#texto');
    listar.innerHTML="";
    listar.appendChild(listaPrestamos());
    const img=document.querySelector('#imagen');
    img.innerHTML="";
    img.appendChild(imgPrestamos());
}

function listadoSocios() {
    const listar=document.querySelector('#texto');
    listar.innerHTML="";
    listar.appendChild(listaSocios());
    const img=document.querySelector('#imagen');
    img.innerHTML="";
    img.appendChild(imgSocios());

}

// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window
window.listadoPrestamos=listadoPrestamos;
window.listadoSocios=listadoSocios;