export function httpGet(url, callback = console.log) {
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

export function httpPost(url, data, callback = console.log) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function() {
        // call the callback when the request is complete
        if (xhr.readyState == 4) {
            callback(xhr);
        }
    }
    xhr.send(JSON.stringify(data));
}