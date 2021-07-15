var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const dotenv = require('dotenv').config( {
  path: '.env'
} );

var xmlhttp = new XMLHttpRequest();
var url = "http://api.instatus.com/v1/" + process.env.PAGE_ID + "/subscribers";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = JSON.parse(xmlhttp.responseText);
      console.log(result);
  }
};

xmlhttp.open("GET", url, true);

xmlhttp.setRequestHeader("Authorization", "Bearer " + process.env.API_KEY);
xmlhttp.setRequestHeader("Content-Type", "application/json");

xmlhttp.send();