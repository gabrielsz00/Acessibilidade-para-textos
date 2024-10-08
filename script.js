let speech = new SpeechSynthesisUtterance();
let button = document.querySelector('button');
let voices = [];
let selectVoice = document.querySelector('select');


button.addEventListener('click', () =>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
    voices =  window.speechSynthesis.getVoices();
    speech.voice = voices[1];
    voices.forEach((voice, index) => (selectVoice.options[index] = new Option(voice.name, index)))
}

selectVoice.addEventListener('change', () => {
    speech.voice = voices[selectVoice.value]
})