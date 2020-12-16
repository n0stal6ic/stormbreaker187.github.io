var source = "background.wav"
var audio = document.createElement("audio");
audio.autoplay = true;
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;