let states = window.localStorage.getItem('states') || '{"data": []}';
states = JSON.parse(data.states);

function getData () {
  

  window.localStorage; setItem('states', JSON.stringify(sates));
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('./service-worker.js')
  .then(function (reg) {
    
  });
}