const swup = new Swup();

if (window.location.pathname.includes('elcapone.html')) {
    const crimeText = document.getElementById('crimeText');
    const caponeImage = document.getElementById('caponeImage');
    const buttons = document.querySelectorAll('.change-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newText = button.getAttribute('data-text');
            const newImage = button.getAttribute('data-image');

            crimeText.textContent = newText;
            caponeImage.src = newImage;
        });
    });
}

if (window.location.pathname.includes('alcatraz.html')) {
    const crimeText = document.getElementById('crimeText');
    const caponeImage = document.getElementById('caponeImage');
    const buttons = document.querySelectorAll('.change-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newText = button.getAttribute('data-text');
            const newImage = button.getAttribute('data-image');

            crimeText.textContent = newText;
            caponeImage.src = newImage;
        });
    });
}
if (window.location.pathname.includes('bonnie.html')) {
    const crimeText = document.getElementById('crimeText');
    const caponeImage = document.getElementById('caponeImage');
    const buttons = document.querySelectorAll('.change-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newText = button.getAttribute('data-text');
            const newImage = button.getAttribute('data-image');

            crimeText.textContent = newText;
            caponeImage.src = newImage;
        });
    });
}
