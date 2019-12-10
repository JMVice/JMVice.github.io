//Abre la ventana de imprimir en la cual se puede encontrar la función de guardar el archivo en PDF.
function IMPRIMIR_ARCHIVO_PDF() {
    const title_contenido_original = "Ret Formulario Camas";
    var date = new Date(),
        anio = date.getFullYear(),
        mes = date.getMonth(),
        dia = date.getDay(),
        hora = date.getHours,
        minutos = date.getMinutes(),
        segundos = date.getSeconds(),
        title_contenido_para_generar_PDF = generar_texto_para_titulo_de_archivo_PDF(dia, mes, anio, hora, minutos, segundos);
    cambiar_texto_del_titulo_de_la_pagina(title_contenido_para_generar_PDF);
    window.print();
    cambiar_texto_del_titulo_de_la_pagina(title_contenido_original);
}

//Metodo para cambiar el contenido de la pagina HTML. Cuando se genera un PDF, el nombre es asignado
//por el contenido dentro del meta tag title. Por lo que para no generar archivos PDF con nombres
//duplicados, se opta por cambiarlo un momento.
function cambiar_texto_del_titulo_de_la_pagina(texto) {
    document.title = texto;
}

//Genera el texto con el cual sera nombrado el archivo PDF que esta a punto de ser guardado.
function generar_texto_para_titulo_de_archivo_PDF(dia, mes, anio, hora, minutos, segundos) {
    return dia + "-" + mes + "-" + anio + hora + minutos + segundos + " - Ret Formulario Camas.";
}