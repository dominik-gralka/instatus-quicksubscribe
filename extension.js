
var path = window.location.pathname;
var initializer = "q" //Query string after path example.com/path?q=...

var components = [
    "ckr3kkv7h1639107uofl74bl4bl",
];


function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getQuery() {
    var query = getParameterByName(initializer);
    console.log('Query: ' + query);
    if (query == 'a') {

    }
    else {
        return false;
    }
}