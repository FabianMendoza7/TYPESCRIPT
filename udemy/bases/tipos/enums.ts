(() => {
    enum AudioLevel {
        min,
        medium,
        max
    }

    console.log(AudioLevel);

    let currentAudio: AudioLevel = AudioLevel.medium;
    currentAudio = 2;

    // no permitido:
    //currentAudio = 4;

})()