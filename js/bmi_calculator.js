function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters

  if (!weight || !height) {
    alert("⚠️ Please enter valid numbers for weight and height!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  const bmiResult = document.getElementById('bmiResult');
  const advice = document.getElementById('advice');

  bmiResult.textContent = `Your BMI: ${bmi}`;

  if (bmi < 18.5) {
    advice.textContent = "Underweight – Eat a balanced diet and gain healthy weight 🥗";
    advice.style.color = "#ff9800";
  } else if (bmi < 25) {
    advice.textContent = "Normal – Great job! Keep maintaining your healthy lifestyle 💪";
    advice.style.color = "#4CAF50";
  } else if (bmi < 30) {
    advice.textContent = "Overweight – Consider healthy diet and exercise 🏃‍♂️";
    advice.style.color = "#f44336";
  } else {
    advice.textContent = "Obese – Consult a doctor or nutritionist for guidance ⚠️";
    advice.style.color = "#d32f2f";
  }
}
