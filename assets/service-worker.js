'use strict';

self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('push', function (event) {
    console.log(event);
    /*event.waitUntil(
        fetch('/api/v3/push/chrome/latest').then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                throw new Error();
            }

            return response.json().then(function (data) {
                if (data.error || !data.notification) {
                    console.error('The API returned an error.', data.error);
                    throw new Error();
                }

                var title = data.notification.title;
                var body = data.notification.body;
                var icon = 'https://meduza.io/image/attachments/images/000/017/996/original/S12LHoS3R1rd-8AR8RRNGg.png';

                return self.registration.showNotification(title, {
                    body: body,
                    icon: icon,
                    data: {
                        url: data.notification.url
                    }
                });
            }).catch(function (err) {
                console.error('Unable to retrieve data', err);
            });
        })
    );*/
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = event.notification.data.url;
    event.waitUntil(clients.openWindow(url));
});