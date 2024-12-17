const form = document.querySelector("form");

// console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const lessWeight = document.querySelector("#lessWeight");
  const normalWeight = document.querySelector("#normalWeight");
  const overWeight = document.querySelector("#overWeight");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<span>Result: ${bmi}</span>`;
    if (bmi < 18.6) {
      lessWeight.style.display = "block";
      normalWeight.style.display = "none";
      overWeight.style.display = "none";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      lessWeight.style.display = "none";
      normalWeight.style.display = "block";
      overWeight.style.display = "none";
    } else {
      lessWeight.style.display = "none";
      normalWeight.style.display = "none";
      overWeight.style.display = "block";
    }
  }
});
