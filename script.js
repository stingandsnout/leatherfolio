const leatherColors = [
    { img: 'images/RED BUTTON.png', display: 'images/RED LEATHER-21.png' },
    { img: "images/ORANGE BUTTON.png", display: "images/ORANGE LEATHER-21.png" },
    { img: 'images/OLIVE BUTTON.png', display: 'images/OLIVE LEATHER-21.png' },
    { img: 'images/BLUE BUTTON.png', display: 'images/BLUE LEATHER-21.png' },
    { img: 'images/BORDEAUX BUTTON.png', display: 'images/BORDEAUX LEATHER-21.png' },
    {img: "images/BISCUIT BUTTON.png", display: "images/BISCUIT LEATHER-21.png"},
    { img: 'images/WHISKEY BUTTON.png', display: 'images/WHISKEY LEATHER-21.png' },
    { img: 'images/COGNAC BUTTON.png', display: 'images/COGNAC LEATHER-21.png' },
    { img: 'images/BLACK BUTTON.png', display: 'images/BLACK LEATHER-21.png' }
];

const cordColors = [
     { img: 'images/RED CORD BUTTON.png', display: 'images/RED CORD-21.png' },
     { img: 'images/ORANGE CORD BUTTON.png', display: 'images/ORANGE CORD-21.png' },
    { img: 'images/YELLOW CORD BUTTON.png', display: 'images/YELLOWW-21.png' },
    { img: 'images/VIOLET CORD BUTTON.png', display: 'images/VIOLET CORD-21.png' },
    { img: 'images/PINK CORD BUTTON.png', display: 'images/PINK CORD-21.png' },
    { img: 'images/TURQUOISE CORD BUTTON.png', display: 'images/TURQUOISE CORD-21.png' },
    { img: 'images/GREEN CORD BUTTON.png', display: 'images/GREEN CORD-21.png' },
    { img: 'images/BLUE CORD BUTTON.png', display: 'images/BLUE CORD-21.png' },
    { img: 'images/ROYAL BLUE CORD BUTTON.png', display: 'images/NAVY CORD-21.png' },
    { img: 'images/BROWN CORD BUTTON.png', display: 'images/BROWNN-21.png' },
    { img: 'images/BLACK CORD BUTTON.png', display: 'images/BLLACK-21.png' }


];

// Function to create buttons and set images on click
function createButtons(colors, containerId, updateFunction) {
const container = document.getElementById(containerId);
colors.forEach(color => {
    const button = document.createElement('img');
    button.src = color.img;
    button.classList.add('color-button');

    button.onclick = () => updateFunction(color.display);

    container.appendChild(button);
});
}

// Function to update leather image
function updateLeather(imageSrc) {
const leatherImage = document.getElementById('journalLeather');
leatherImage.src = imageSrc;
leatherImage.style.display = 'block';
}

// Function to update cord image
function updateCord(imageSrc) {
const cordImage = document.getElementById('journalCord');
cordImage.src = imageSrc;
cordImage.style.display = 'block';
}

// Engraving text update

function updateEngraving() {
const inputText = document.getElementById('engravingInput').value;
const engravingPreview = document.getElementById('engravingPreview');

// If input is empty, hide the text
if (inputText.trim() === "") {
    engravingPreview.innerText = "";  // Makes text disappear
} else {
    engravingPreview.innerText = inputText;
}
}

// Initialize buttons on page load
window.onload = function() {
createButtons(leatherColors, 'leatherButtons', updateLeather);
createButtons(cordColors, 'cordButtons', updateCord);
};

