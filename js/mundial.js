function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mundial").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://livescore-api.com/api-client/scores/live.json?key=e76CZNN3ofnPlw73&secret=eJpPNK4m2pNvKwhYDnACboGAD3pZAx2O", true);
  xhttp.send();
}