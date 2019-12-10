//Variables propensas a cambio. Cuando la variable contador_hogar llega a 4 el botón para agregar
//más paneles de caracteristicas de camas para el hogar desaparecera. Lo mismo ocurre con el contador
//para caracteristicas de cama para el negocio.
//El Link de contenido de caracteristicas cama cambia dependiendo si se ha pedido otro panel de caracteristicas
//pero para el negocio llamando así un tipo de contenido diferente.
//Contenedor ID contiene el id del div en donde el contenido será agregado.
var contador_negocio = 1,
    link_contenido = "N/D",
    contenedor_id = "N/D",
    id_boton_agregar_contenido = "N/A";

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(contenedor_id).innerHTML += this.responseText;
        }
    };
    xhttp.open("GET", link_contenido, true);
    xhttp.send();
}

function agregar_caracteristicas_de_otra_cama_negocio() {
    id_boton_agregar_contenido = "boton_agregar_caracteristicas_de_otra_cama_negocio";
    contenedor_id = "CONTENEDOR_PARA_MAS_CARACTERISTICAS_DE_CAMA_NEGOCIO_ID";
    link_contenido = "TXT/contenido-caracteristicas-cama-negocio.txt";
    controlador_boton_negocio();
    loadDoc();
}

function controlador_boton_negocio() {
    contador_negocio++;
    if (contador_negocio >= 4) {
        document.getElementById(id_boton_agregar_contenido).style.visibility = 'hidden';
    }
}

////////////////////////////////////////////////////////////////////////////////////
//Codigo obsoleto en version 1.1

var contador_hogar = 1;

function controlador_boton_hogar() {
    contador_hogar++;
    if (contador_hogar >= 4) {
        document.getElementById(id_boton_agregar_contenido).style.visibility = 'hidden';
    }
}

function agregar_caracteristicas_de_otra_cama_hogar() {
    id_boton_agregar_contenido = "boton_agregar_caracteristicas_de_otra_cama_hogar";
    contenedor_id = "CONTENEDOR_PARA_MAS_CARACTERISTICAS_DE_CAMA_HOGAR_ID";
    link_contenido = "TXT/contenido-caracteristicas-cama.txt";
    controlador_boton_hogar();
    loadDoc();
}
////////////////////////////////////////////////////////////////////////////////////