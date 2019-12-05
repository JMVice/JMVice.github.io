function contenido_load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://dl.dropboxusercontent.com/s/h785ag1a0m6utu1/jmvice-io-ajax-online-contenido.txt?dl=0", true);
    xhttp.send();
  }