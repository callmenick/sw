if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt event');
});
