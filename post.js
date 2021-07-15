var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const dotenv = require('dotenv').config( {
    path: '.env'
  } );

var xmlhttp = new XMLHttpRequest();
var url = "http://api.instatus.com/v1/" + process.env.PAGE_ID + "/subscribers";

xmlhttp.open("POST", url, true);

var params = {
    'email': 'aru95700@eoopy.com',
    'all': false,
    'components': ['ckr3kkv7h1639107uofl74bl4bl']
};

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = JSON.parse(xmlhttp.responseText);
      console.log(result);
  }
};

xmlhttp.setRequestHeader("Authorization", "Bearer " + process.env.API_KEY);
xmlhttp.setRequestHeader("Content-Type", "application/json");

try {
    xmlhttp.send(JSON.stringify(params));
}
catch(e) {
    console.log(e);
}
