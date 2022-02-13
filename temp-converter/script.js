// Select mode button

function selectModeFahr(){
  let selectFahr = document.getElementById("fahrenheit");
  let modeFahr = document.getElementById("converterOfCelsius");
  let modeCel = document.getElementById("converterOfFahrenheit");
  let selectToFahr = document.getElementsByClassName("fahrSelector");
  let doesNotSelectToCel = document.getElementsByClassName("celSelector");

  if (selectFahr.checked === true) {
    modeFahr.style.display = "block";
    modeCel.style.display = "none";
    selectToFahr[1].style.color = "lightblue";
    selectToFahr[1].style.fontWeight = "normal";
    doesNotSelectToCel[1].style.color = "blue";
    doesNotSelectToCel[1].style.fontWeight = "bold";
  } 
}

function selectModeCel() {
  let selectCel = document.getElementById("celsius");
  let modeFahr = document.getElementById("converterOfCelsius");
  let modeCel = document.getElementById("converterOfFahrenheit");
  let selectToCel = document.getElementsByClassName("celSelector");
  let doesNotSelectToFahr = document.getElementsByClassName("fahrSelector");
  
  if (selectCel.checked === true) {
    modeFahr.style.display = "none";
    modeCel.style.display = "block";
    selectToCel[1].style.color = "lightblue";
    selectToCel[1].style.fontWeight = "normal";
    doesNotSelectToFahr[1].style.color = "blue";
    doesNotSelectToFahr[1].style.fontWeight = "bold";
  } 
}

// Reset button

function resetFahr(){   
    document.getElementById("setResultOfFahrenheit").innerHTML = "";
    document.getElementById("convertToFahrenheit").innerHTML = "";
}

function resetCel(){   
    document.getElementById("setResultOfCelsius").innerHTML = "";
    document.getElementById("convertToCelsius").innerHTML = "";
}

// Conversion button

function toFahrenheit() {
  let celsius = document.getElementById("convertToFahrenheit").value;
  let formula1 = ((celsius * 9 / 5) + 32).toFixed(1);
  let showResult1 = document.getElementById("setResultOfFahrenheit");
  showResult1.innerHTML = formula1 + " &deg;F";
}

function toCelsius() {
  let fahrenheit = document.getElementById("convertToCelsius").value;
  let formula = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  let showResult = document.getElementById("setResultOfCelsius");
  showResult.innerHTML = formula + " &deg;C";
}