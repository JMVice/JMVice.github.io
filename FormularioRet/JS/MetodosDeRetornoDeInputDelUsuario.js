////////////////////////////////////////////////////////////////////////////////////////////////////
//METODOS DE RETORNO DE INPUT DEL USUARIO

//Retorna el valor seleccionado o escrito dado por el usuario dentro de cualquier
//tag al dar su ID. Funciona con input text y dropdown.
function TREAR_VALOR_DEL_TAG_DADO_SU_ID(id_del_tag) {
    return document.getElementById(id_del_tag).value;
}

//Retorna el valor dado en una seleccion unica de input type=radio dado el nombre
//de su grupo "name=X"
function TRAER_VALOR_SELECCIONADO_DE_GRUPO_INPUT_TYPE_RADIO(nombre_del_grupo_radio) {
    try{
        return document.querySelector('input[name="' + nombre_del_grupo_radio + '"]:checked').value;
    }catch(error){
        return "Sin seleccion";
    }
}

//Retorna true o false si el id que corresponde a un check box dado esta seleccionado
//o no.
function ESTA_EL_CHECKBOX_SELECCIONADO(id_del_checkbox) {
    return document.getElementById(id_del_checkbox).checked;
}