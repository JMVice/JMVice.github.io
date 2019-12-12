var MODULO_A_OCULTAR_ID = "N/A yet",
    MODULO_A_MOSTRAR_ID = "N/A yet",
    VALOR_SELECCIONADO_PEFIL_ENCUESTADO = "N/A yet";

const RUTA_CONTENIDO_DIV_HOGAR = "TXT/CaracterizacionDelUsoDeCamasEnElHogar-CONTENIDO.txt",
    RUTA_CONTENIDO_DIV_NEGOCIO = "TXT/CaracterizacionDelUsoDeCamasEnElNegocio-CONTENIDO.txt",
    MODULO_CARACTERIZACION_CAMAS_NEGOCIO_ID = "CaracterizacionDelUsoDeCamasEnElNegocio",
    MODULO_CARACTERIZACION_CAMAS_HOGAR_ID = "CaracterizacionDelUsoDeCamasEnElHogar";

function ControladorPerfilEncuestado_Funcion() {
    VALOR_SELECCIONADO_PEFIL_ENCUESTADO = TREAR_VALOR_DEL_TAG_DADO_SU_ID("PERFIL_ENCUESTADO");
    if (VALOR_SELECCIONADO_PEFIL_ENCUESTADO === "Cliente") {
        MODULO_A_OCULTAR_ID = MODULO_CARACTERIZACION_CAMAS_HOGAR_ID;
        MODULO_A_MOSTRAR_ID = MODULO_CARACTERIZACION_CAMAS_NEGOCIO_ID;
        ocultar_modulo(MODULO_A_OCULTAR_ID);
        mostrar_modulo(MODULO_A_MOSTRAR_ID);
    } else if (VALOR_SELECCIONADO_PEFIL_ENCUESTADO === "Consumidor") {
        MODULO_A_OCULTAR_ID = MODULO_CARACTERIZACION_CAMAS_NEGOCIO_ID;
        MODULO_A_MOSTRAR_ID = MODULO_CARACTERIZACION_CAMAS_HOGAR_ID;
        ocultar_modulo(MODULO_A_OCULTAR_ID);
        mostrar_modulo(MODULO_A_MOSTRAR_ID);
    } else {
        //En �ste caso se habr�a marcado la opci�n "ambos" por lo que ambos modulos
        //serian visibles.
        mostrar_modulo(MODULO_CARACTERIZACION_CAMAS_HOGAR_ID);
        mostrar_modulo(MODULO_CARACTERIZACION_CAMAS_NEGOCIO_ID);
    }
}

function ocultar_modulo(id_div) {
    document.getElementById(id_div).innerHTML = "";
}

function mostrar_modulo(id_div) {
    if (id_div === MODULO_CARACTERIZACION_CAMAS_NEGOCIO_ID) {
        CARGA_AJAX(id_div, RUTA_CONTENIDO_DIV_NEGOCIO);
        contador_negocio = 1;
    } else {
        //Si no es del negocio, es del hogar.
        CARGA_AJAX(id_div, RUTA_CONTENIDO_DIV_HOGAR);
    }
}

function CARGA_AJAX(id_div, source_link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id_div).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", source_link, true);
    xhttp.send();
}