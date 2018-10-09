window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

if (!window.SpeechRecognition) {
    alert('Recurso não suportado');
}

const recognizer = new SpeechRecognition();
const recresult = document.getElementById('recresult');

recognizer.onresult = function (e) {
    recresult.innerText = '';

    for (let i = e.recresult; i < e.recresult.length; i++) {
        recresult.innerText += e.recresult[i][0].transcript;
        
        if (e.recresult[i].isFinal) {
            recresult.innerText += " (Convicção " + e.recresult[i][0].confidence + ")";
        }
    }

    document.getElementById('startrec').addEventListener('click', function() {
        recognizer.start();
    })

    document.getElementById('stoprec').addEventListener('click', function () {
        recognizer.stop();
    })
}