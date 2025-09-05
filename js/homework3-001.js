// JavaScript source code for Homework 3, Exercise 1


function showResults(results) {
    document.getElementById("results").value = results;
}

/**
 * Checks that the input is between 0-100.
 */
function isScoreInRange(score) {
    if (score < 0 || score > 100) {        
        return false;
    }
    return true;
}

/**
 * Checks for valid input, i.e., that the input is between 0-100 and that, 
 * of course, the input are all numbers.
 */
function validateInput(score, criterion="criterion") {

    const msg = "ERROR. Please enter valid integer number between 0 and 100 for " + criterion + "!";
    let isValid = true;   

    try {
        score = Number(score == "" ? "x" : score);
    } catch (error) {

        isValid = false;
    }

    if (!Number.isInteger(score)) {
        isValid = false;

    } else if (!isScoreInRange(score)) {
        isValid = false;
    } 

    if (!isValid) {
        showResults(msg);
        return false;
    } 

    return isValid;

}

/**
 * Converts points to letter grade based on the following scale:
    Letter Grade
    90-100 A
    80-89  B
    70-79  C
    60-69  D
    0-59   F

 */
function pointsToLetterGrade(score) {
    var letterGrade = "F";
    if (score >= 90) {
        letterGrade = "A";
    } else if (score >= 80) {
        letterGrade = "B";
    } else if (score >= 70) {
        letterGrade = "C";
    } else if (score >= 60) {
        letterGrade = "D";
    }
    return letterGrade;
 }

// Calculate final score based on weights
function calculateFinalScore(hwAvg, midExam, finalExam, participation) {

    const finalPoints = (0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation);
    return finalPoints;
}

// This function is called when the form is submitted
function submitScores(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showResults(""); // reset output area


    let homeWork = document.getElementById("homeworkAverage").value;
    let midterm = document.getElementById("midTermScore").value;
    let finalExam = document.getElementById("finalExamScore").value;
    let participation = document.getElementById("participationScore").value;

    if (validateInput(homeWork, "Homework Average") &&
        validateInput(midterm, "Midterm Exam Score") &&
        validateInput(finalExam, "Final Exam Score") &&
        validateInput(participation, "Participation")) {
        /* continue */
    } else {
        return;
    }

    // Convert input values to integers so we can do math with them
    homeWork = parseInt(homeWork);
    midterm = parseInt(midterm);
    finalExam = parseInt(finalExam);
    participation = parseInt(participation);

    // calculate final score and letter grade
    const finalGradeScore = calculateFinalScore(homeWork, midterm, finalExam, participation);
    const res = "Congratulations! Your final score is " + finalGradeScore.toFixed(0) + ", which is an " + pointsToLetterGrade(finalGradeScore);

    showResults(res);

}

function testLetterGrade() {
    console.log("Testing pointsToLetterGrade function:");
    console.log("Score: 95, Expected: A, Actual: " + pointsToLetterGrade(95));
    console.log("Score: 85, Expected: B, Actual: " + pointsToLetterGrade(85));
    console.log("Score: 75, Expected: C, Actual: " + pointsToLetterGrade(75));
    console.log("Score: 65, Expected: D, Actual: " + pointsToLetterGrade(65));
    console.log("Score: 55, Expected: F, Actual: " + pointsToLetterGrade(55));
}

//(0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * participation)
function testCalculateFinalScore() {
    console.log("Testing calculateFinalScore function:");
    console.log("HW: 100, Mid: 100, Final: 100, Part: 100, Expected: 100, Actual: " + calculateFinalScore(100, 100, 100, 100));
    console.log("HW: 80, Mid: 70, Final: 90, Part: 100, Expected: 82, Actual: " + calculateFinalScore(80, 70, 90, 100));
    console.log("HW: 60, Mid: 50, Final: 40, Part: 30, Expected: 51, Actual: " + calculateFinalScore(60, 50, 40, 30));
} 