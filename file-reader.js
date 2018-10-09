const getReadedFile = function (reader, item) {
  item.innerHTML = 'Arquivo comença com "' + reader.result.substr(0, 30) + '"';
}

const fileReader = function (e) {
  const files = e.target.files;
  document.getElementById('counter').innerHTML = files;

  for (let i= 0; i<files.length; i++) {
    let item = document.createElement('li');

    const reader = new FileReader();
    reader.addEventListener('load', getReadedFile(reader, item));
    reader.readAsText(files[i]);

    list.appendChild(item);
  }
}

document.getElementById('file');addEventListener('change', fileReader);