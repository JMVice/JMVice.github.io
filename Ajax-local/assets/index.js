const url_image = "https://dl.dropboxusercontent.com/s/0axfdxtmq23oo8r/jmvice-io-ajax-image.txt?dl=0";

function carga_contenido_local() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenido_local").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "assets/ajax/ajax-local.txt", true);
    xhttp.send();
  }

  function carga_contenido_online() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenido_online").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://dl.dropboxusercontent.com/s/53c3jku96np5hzi/jmvice-io-ajax-local-online.txt?dl=0", true);
    xhttp.send();
  }

  function carga_img() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenido_img").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url_image, true);
    xhttp.send();
  }