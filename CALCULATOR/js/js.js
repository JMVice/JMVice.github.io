function calcular() {
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value
  if (n1 == "" || n2 == "") {
    setStatus("You must fill all the empty spaces.");
  } else {
    document.getElementById("status").innerHTML = "";
  }
  try {
    let operador = document.getElementById("operador").value;
    switch (operador) {
      case "+":
        document.getElementById("resultado").value = parseInt(n1) + parseInt(n2);
        break;
      case "-":
        document.getElementById("resultado").value = parseInt(n1) - parseInt(n2);
        break;
      case "x":
        document.getElementById("resultado").value = parseInt(n1) * parseInt(n2);
        break;
      case "%":
        document.getElementById("resultado").value = parseInt(n1) / parseInt(n2);
        break;
      default:
        setStatus("Fatal error.");
    }
  } catch (error) {
    setStatus("Spaces can't be empty.");
  }
}

function setStatus(status) {
  document.getElementById("status").innerHTML = status;
}