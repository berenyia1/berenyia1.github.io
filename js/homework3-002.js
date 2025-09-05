// JavaScript source code for Homework 3, Exercise 1


function showResults(results) {
    document.getElementById("results").value = results;
}


/**
 * Checks for valid input, i.e., that the input is between 0-100 and that, 
 * of course, the input are all numbers.
 */
function validateInput(score, criterion = "criterion") {

    const msg = "ERROR. Please enter valid integer number between 0 and 100 for " + criterion + "!";
    let isValid = true;

   

    return isValid;

}


// This function is called when the form is submitted
function formSubmitted(event) {
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
