document.querySelector('.play-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const text = document.querySelector('.inhale-exhale-hold-text');
    const progressBar = document.querySelector('.progress-bar');
    const stopText = document.querySelector('.stop-text');
    
    circle.classList.toggle('animate');
    if (circle.classList.contains('animate')) {
        playButton.style.display = 'none'; // Remove the play button
        text.style.display = 'block'; // Show the inhale/exhale/hold text
        progressBar.style.width = '0'; // Reset progress bar
        stopText.style.display = 'none'; // Hide stop text
        startBoxBreathing(); // Start text updates immediately
    } else {
        playButton.style.display = 'block'; // Show the play button if animation stops
        text.style.display = 'none'; // Hide the inhale/exhale/hold text
        stopBoxBreathing(); // Stop the breathing cycle
    }
});

const circle = document.querySelector('.circle');
const text = document.querySelector('.inhale-exhale-hold-text');
const progressBar = document.querySelector('.progress-bar');
const stopText = document.querySelector('.stop-text');

let intervalId;
let cycleCount = 0;

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
        if (phase === 0) cycleCount++;
        updateProgressBar();
        if (cycleCount === 8) {
            stopBoxBreathing();
            stopText.style.display = 'block'; // Show stop text
            setTimeout(() => {
                const playButton = document.querySelector('.play-button');
                playButton.style.display = 'block'; // Show the play button
                text.style.display = 'none'; // Hide the inhale/exhale/hold text
                stopText.style.display = 'none'; // Hide stop text
                cycleCount = 0; // Reset cycle count
            }, 4000);
        }
    };

    updateText(); // Start the first cycle immediately
    intervalId = setInterval(updateText, 4000);
};

const updateProgressBar = () => {
    const progress = (cycleCount * 4 + (timePassed / 4)) * 12.5; // 12.5% per 4 seconds
    progressBar.style.width = `${progress}%`;
};

const stopBoxBreathing = () => {
    clearInterval(intervalId);
    circle.classList.remove('animate');
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
