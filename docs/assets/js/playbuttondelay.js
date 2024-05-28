document.addEventListener("DOMContentLoaded", function() {
    // Delay time in milliseconds (e.g., 3000ms = 3 seconds)
    var delayTime = 2200;

    // Select the button
    var button = document.querySelector('.play-button');

    // Set a timeout to show the button after the delay
    setTimeout(function() {
        button.classList.add('show');
    }, delayTime);
});