let rec;
if(!("webkitSpeechRecognition" in window)) {
    alert("disculpas, no puedes uar la API");
}else{
    rec = new webkitSpeechRecognition();
    rec.lang = "español";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result",iniciar);
}
function iniciar (event) {
    for (i = event.resultIndex; i < event.results.lengh; i++){
           document.getElementById("texto").innerHTML = event.results[i][0].transcript;
    }         
}
rec.start();