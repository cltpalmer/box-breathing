document.querySelector('.play-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const stopButton = document.querySelector('.stop-button');
    const text = document.querySelector('.inhale-exhale-hold-text');
    
    circle.classList.toggle('animate');
    if (circle.classList.contains('animate')) {
        playButton.style.display = 'none'; // Remove the play button
        stopButton.style.display = 'block'; // Show the stop button
        text.style.display = 'block'; // Show the inhale/exhale/hold text
        startBoxBreathing(); // Start text updates immediately
    } else {
        playButton.style.display = 'block'; // Show the play button if animation stops
        stopButton.style.display = 'none'; // Hide the stop button
        text.style.display = 'none'; // Hide the inhale/exhale/hold text
        stopBoxBreathing(); // Stop the breathing cycle
    }
});

document.querySelector('.stop-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const stopButton = document.querySelector('.stop-button');
    const text = document.querySelector('.inhale-exhale-hold-text');

    circle.classList.remove('animate');
    playButton.style.display = 'block'; // Show the play button
    stopButton.style.display = 'none'; // Hide the stop button
    text.style.display = 'none'; // Hide the inhale/exhale/hold text
    stopBoxBreathing(); // Stop the breathing cycle
});

const circle = document.querySelector('.circle');
const text = document.querySelector('.inhale-exhale-hold-text');

let intervalId;

const startBoxBreathing = () => {
    let phase = 0;

    const updateText = () => {
        switch (phase) {
            case 0:
                text.textContent = 'Inhale';
                text.style.color = 'white';
                break;
            case 1:
                text.textContent = 'Hold';
                text.style.color = 'white';
                break;
            case 2:
                text.textContent = 'Exhale';
                text.style.color = 'black';
                break;
            case 3:
                text.textContent = 'Hold';
                text.style.color = 'black';
                break;
        }
        phase = (phase + 1) % 4;
    };

    updateText(); // Start the first cycle immediately
    intervalId = setInterval(updateText, 4000);
};

const stopBoxBreathing = () => {
    clearInterval(intervalId);
};

circle.addEventListener('animationstart', () => {
    startBoxBreathing();
});

circle.addEventListener('animationend', () => {
    stopBoxBreathing();
});

circle.addEventListener('animationiteration', () => {
    startBoxBreathing();
});
