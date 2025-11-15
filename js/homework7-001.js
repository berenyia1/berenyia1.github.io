/******* Define Event listener functions for text customization controls ********/

// function to set background color of text
// the color is selected using radio buttons value
function setBgColor(event) {
    const bgColor = event.target.value;
    document.querySelector('#nursery-rhymes').style.backgroundColor = bgColor;
}

// function to set font style of text
// the font style is selected using checkboxes value as class names to add/remove
function setFontStyle(event) {
    const fontStyle = event.target.value;
    const nurseryRhymes = document.querySelector('#nursery-rhymes');

    if (event.target.checked) {
        nurseryRhymes.classList.add(fontStyle);

    } else {
        nurseryRhymes.classList.remove(fontStyle);
    }
}

// function to set font size of text
// the font size is selected using dropdown value as em unit
function setFontSize(event) {
    const fontSize = event.target.value;
    if (fontSize) { // if font size is not empty
        const nurseryRhymes = document.querySelector('#nursery-rhymes');
        nurseryRhymes.style.fontSize = fontSize + 'em';
    }
}



/**************** ADD Event Listeners to Elements ************************/

// add event listenert to radio buttons to set background color
document.querySelectorAll('input[name="bgColorGroup"]').forEach(radio => {
    radio.addEventListener('change', (event) => { setBgColor(event); });
});

// add event listeners to checkboxes to set font style
document.querySelectorAll('input[name="fontStyle"]').forEach(cb => {
    cb.addEventListener('change', (event) => { setFontStyle(event); });
});

// add event listener to dropdown to set font size
document.querySelector('#fontSize').addEventListener('change', (event) => {setFontSize(event);});

