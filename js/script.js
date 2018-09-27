document.getElementById('app').innerHTML = '<h1>HELLO</h1>';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  })
}