﻿/*
  JavaScript for website Help /help - cc110x_rf_Gateway
  Copyright (c) 2022 <HomeAutoUser & elektron-bbs>
  URL: https://github.com/HomeAutoUser/cc1101_rf_Gateway
*/

/* https://randomnerdtutorials.com/esp8266-web-server-spiffs-nodemcu/ */
window.onload = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var txt = this.responseText;
      var obj = JSON.parse(txt);
      if (obj.CC1101 == "no") {
        /* blocking href link */
        document.getElementById("StatCC1101").innerHTML = '';
      }
    }
  };
  xhttp.open("GET", "/request_status", true);
  xhttp.send();
}
