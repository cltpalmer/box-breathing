document.querySelector('.play-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const text = document.querySelector('.inhale-exhale-hold-text');
    
    circle.classList.toggle('animate');
    if (circle.classList.contains('animate')) {
        playButton.style.display = 'none'; // Remove the play button
        text.style.display = 'block'; // Show the inhale/exhale/hold text
    } else {
        playButton.style.display = 'block'; // Show the play button if animation stops
        text.style.display = 'none'; // Hide the inhale/exhale/hold text
    }
});

const circle = document.querySelector('.circle');
const text = document.querySelector('.inhale-exhale-hold-text');

circle.addEventListener('animationiteration', () => {
    text.textContent = 'Inhale';
    text.style.color = 'white';
});

circle.addEventListener('animationstart', () => {
    text.textContent = 'Inhale';
    text.style.color = 'white';
});

circle.addEventListener('animationiteration', () => {
    let timePassed = 0;
    const updateText = () => {
        if (timePassed === 0) {
            text.textContent = 'Inhale';
            text.style.color = 'white';
        } else if (timePassed === 4) {
            text.textContent = 'Hold';
            text.style.color = 'white';
        } else if (timePassed === 8) {
            text.textContent = 'Exhale';
            text.style.color = 'black';
        } else if (timePassed === 12) {
            text.textContent = 'Hold';
            text.style.color = 'black';
        }
        timePassed = (timePassed + 4) % 16;
    };
    updateText();
    const intervalId = setInterval(updateText, 4000);
    circle.addEventListener('animationend', () => clearInterval(intervalId));
});