export default function httpGET(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
        if (xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}