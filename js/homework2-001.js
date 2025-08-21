// JavaScript source code
// the letters xy in strong (bold) font, with font family Times New Roman, and the color red
// the numbers 12 that should be written in blue color, and font family Arial
// the numbers 89 that should be written in green color, emphasized(in italics), and font family Impact

function addStyledText(container, text, color, fontFamily, fontWeight = 'normal', fontStyle = 'normal', isAddSpace = true) { 

    const textElement = document.createElement('div');
    //textElement.style.margin = "0 1em 0 0"; // Add margin for better spacing

    textElement.innerHTML = text;
    textElement.style.color = color;
    textElement.style.fontFamily = fontFamily;
    textElement.style.fontWeight = fontWeight; // Set font weight
    textElement.style.fontStyle = fontStyle; // Set font style
    if (isAddSpace) {
        //textElement.style.marginRight = "1em"; // Add space after each element
        textElement.innerHTML += "&nbsp;";
    }

    container.appendChild(textElement);
}


let hw2 = document.getElementById("homework2-001");
hw2.style.display = "flex";

addStyledText(hw2, "xy", "red", "Times New Roman", "bold");

addStyledText(hw2, "12", "blue", "Arial");

addStyledText(hw2, "89", "green", "Impact", "normal", "italic", false);












