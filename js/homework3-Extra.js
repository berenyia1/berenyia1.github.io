

let rand_X = generateRandom();
let rand_Y = generateRandom();

function generateRandom() {
    const r = Math.floor(Math.random() * 10); // Random integer between 0 and 100    
    return r;
}

function showError(results) {
    document.getElementById("results").innerHTML = results;
}

function setXAndY() {
    rand_X = generateRandom();
    rand_Y = generateRandom();
    document.getElementById("x_value").value = rand_X;
    document.getElementById("y_value").value = rand_Y;
    document.getElementById("productXY").value = "";
    showError("");
    document.getElementById("replay-buttons").style.display = "none";
}

function checkResults() {

    let prodXY = document.getElementById("productXY").value;

    prodXY = parseInt(prodXY);

    if (rand_X * rand_Y == prodXY) {
        showError("Very Good! " + rand_X + " * " + rand_Y + " = " + prodXY);
        document.getElementById("replay-buttons").style.display = "block";

    } else {
        showError("Sorry. Try again!");
    }

}

function formSubmitted(event) {
    event.preventDefault();
    checkResults();
}

function stopPlay() {
    showError("Thanks for playing, see you next time!");
    document.getElementById("replay-buttons").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
}


setXAndY();