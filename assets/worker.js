onmessage = function(event) {
    var result = '~~~ ' + event.data + ' ~~~';
    consol.log('worker send result: ' + result);
    postMessage(result);
};