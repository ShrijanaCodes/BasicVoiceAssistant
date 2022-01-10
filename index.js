const btn = document.querySelector(".speak-btn");
const content = document.querySelector(".user-message");

//To-do: edit responses
const greetingMsg = "Hello nice to meet you";
const goodByeMsg = "Bye now."
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function(){
   //To-do: print a message to the console or perform any other action.
}


recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent=transcript;
    readResponse(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
})

function readResponse(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;

    if (message.includes("hello")){
        const response = greetingMsg;
        speech.text = response;
    }

    else speech.text = "I don't know that one yet."

    
    //To-do: Add another if statement to add a response to say goodbye


    window.speechSynthesis.speak(speech);

}
