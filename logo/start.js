function formClicked() {
  var value = document.getElementById("speed").value;
  var speed = 26 - value
  console.log(speed);
  run(speed, (speed > 5));
}

function loadCode() {
  // https://stackoverflow.com/a/196510/9128805
  var xhttp = new XMLHttpRequest();
  var url = "https://raw.githubusercontent.com/mirandaolsen/Logo/master/colorful-flower.logo";
  xhttp.open("GET", url);
  xhttp.onload = function() {
    document.getElementById("code").value = xhttp.responseText;
  }
  xhttp.send();
}
