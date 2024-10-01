const output = document.getElementById("output")
const startButton = document.getElementById("startButton")

let finalTranscript = "";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US'
recognition.interimResults = true;

startButton.addEventListener('click', ()=>{
    recognition.start();
});

recognition.addEventListener('result', (e) =>{
    const transcript = Array.from(e.results).map(result => result[0].transcript).join('');

    if (result[0].isFinal){
        finalTranscript += transcript + ' ';
        output.textContent = finalTranscript;

    }
}
);
 
recognition.addEventListener('end',() => {
    startButton.textcontent = 'START';
    recognition.start();
});


