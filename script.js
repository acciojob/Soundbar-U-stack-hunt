//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const sounds = document.querySelectorAll('audio');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopSounds();
        const soundId = button.getAttribute('data-sound');
        document.getElementById(soundId).play();
    });
});

stopButton.addEventListener('click', () => {
    stopSounds();
});

function stopSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}