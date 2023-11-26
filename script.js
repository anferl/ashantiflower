document.addEventListener('DOMContentLoaded', function () {
    const text = "You know that I love you so much";
    const h1 = document.getElementById('typed-text');
    typeWriter(h1, text, 0);
});

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(element, text, i);
        }, 100); // Adjust the typing speed by changing the timeout value
    } else {
        setTimeout(function () {
            element.innerHTML = ''; // Clear the content
            typeWriter(element, text, 0); // Start typing again
        }, 1000); // Adjust the pause before restarting the typing
    }
}
