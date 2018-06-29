var deferredPrompt;

if (!window.Promise) {
    window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log('Service worker registered!');
        });
}

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

fetch("http://httpbin.org/ip")
    .then(resp => resp.json())
    .then(console.log)

fetch("http://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ message: "Working" })
})
.then(resp => resp.json())
.then(console.log)