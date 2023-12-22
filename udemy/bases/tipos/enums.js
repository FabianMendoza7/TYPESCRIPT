"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log(AudioLevel);
    let currentAudio = AudioLevel.medium;
    currentAudio = 2;
    // no permitido:
    //currentAudio = 4;
})();
