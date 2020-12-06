(() => {
    const textToSpeech = new TextToSpeechV1({
        authenticator: new IamAuthenticator({
            apikey,
            disableSslVerification: true
        }),

        url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com',
        disableSslVerification: true
    });
    const inputText = document.getElementById('text');

    const voice = 'pt-BR_IsabelaV3Voice';

    app.use(express.json());

    const fileFormat = 'mp3';

    const fileName = `Amigo_Secreto.${fileFormat}`;

    const element = document.getElementById('bt-submit');

    element.addEventListener('click', () => {
        const inputText = document.getElementById('text');

        if (inputText.value) {
            loadginElement.setAttribute('class', 'enable');

            if (audioElement.src !== "") {
                audioElement.setAttribute('class', 'disable');
            }
            const text = String(inputText.value);
            const params = {
                text,
                voice,
                accept: `audio/${fileFormat}`
            };

            textToSpeech.synthesize(params)
                .then(response => {
                    // only necessary for wav formats,
                    // otherwise `response.result` can be directly piped to a file
                    return textToSpeech.repairWavHeaderStream(response.result);
                })
                .then(buffer => {
                    try {
                        fs.unlinksync(filename);
                        console.log('successfully deleted ' + filename);
                    } catch (err) {
                        //handle the error
                    }

                    fs.writeFileSync(fileName, buffer);
                    console.log('successfully created ');
                })
                .catch(err => {
                    console.log('error:', err);
                });


        } else {
            alert('Digite uma mensagem antes de continuar.');
        }
    });
})();
/* JS comes here */
function textToAudio() {
    let msg = document.getElementById("text").value;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "pt-BR";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}