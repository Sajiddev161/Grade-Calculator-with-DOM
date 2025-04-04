
function calculateGrade() {
    let obtainedMarks = parseFloat(document.getElementById("obtained_marks").value);
    let totalMarks = parseFloat(document.getElementById("total_marks").value);
   

    if(isNaN(obtainedMarks) || (isNaN(totalMarks) || obtainedMarks > totalMarks) || (obtainedMarks < 0) || totalMarks <= 0){
        document.getElementById("result").innerHTML = 'Please enter valid marks';
        return;
     }
      // Percentage Calculation
      let percentage = (obtainedMarks / totalMarks) * 100;
      let grade = "";

      // Grade Assigning with If-Else Conditions
      if (percentage >= 90) {
          grade = "A+";
      } else if (percentage >= 80) {
          grade = "A";
      } else if (percentage >= 70) {
          grade = "B";
      } else if (percentage >= 60) {
          grade = "C";
      } else if (percentage >= 50) {
          grade = "D";
      } else {
          grade = "Fail";
      }

      // Result Display
      document.getElementById("result").innerText = 
          `Percentage: ${percentage.toFixed(2)}% \n Grade: ${grade}`;
  }


