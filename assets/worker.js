onmessage = function(event) {
    var result = '~~~ ' + event.data + ' ~~~';
    console.log('worker send result: ' + result);
    postMessage(result, 'zzz');
};