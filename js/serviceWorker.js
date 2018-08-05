// Service Worker registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js', {
            scope: './'
        })
        .then(registration => {
            console.log("Service Worker Registered", registration);
        })
        .catch(err => {
            console.log("Service Worker failed to Register", err);
        })
}