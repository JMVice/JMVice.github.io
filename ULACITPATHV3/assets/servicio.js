function m() {
    var selector = document.getElementById(especialidad)
    var value = selector[selector.selectedIndex].value;
    alert(value);
}

function confirmar_servicio() {
    document.getElementById("confirmar_servicio_click").onclick = function () {
        var e = document.getElementById("genero_select");
        var strUser = e.options[e.selectedIndex].text;
        if (strUser == "Masculino") {
            alert("Masculino");
        } else {
            alert("Femenino");
        }
        /* location.href = "index.html"; */
    };
}