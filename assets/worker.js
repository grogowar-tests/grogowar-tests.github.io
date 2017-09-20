var requestClass = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

function ajax(url, success, error, beforeSend) {
    var request = new requestClass();
    request.open('GET', url, true);
    if (beforeSend) {
        beforeSend(request);
    }
    if (success) {
        request.onload = success;
    }
    if (error) {
        request.onerror = error;
    }
    try {
        request.send();
    } catch (e) {}
    return request;
}

function get_url_success() {
    console.log('get url success, content: ' + this.responseText);
    postMessage(this.responseText);
}

function get_url_error() {
    console.log('get url error, status: ' + this.statusText);
}

onmessage = function(event) {
    ajax(event.data, get_url_success, get_url_error);
};