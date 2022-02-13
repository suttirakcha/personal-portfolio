function resetResult(){
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "all 2s";
    document.getElementById("valuetest").innerText = "";
    document.getElementById("valueResult").innerHTML = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
}

function bodyMassIndex(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let calculatedBMI = (weight / ((height * height) / 10000)).toFixed(1); // weight in kilograms, height in centimetres 

    let result;
 
        // run the result if they put the correct format.

        if (calculatedBMI >= 30){ // Value more than 30
            result = 'Obese';
            document.body.style.background = "rgb(255, 60, 0)";
            document.body.style.transition = "all 2s";
        } else if (calculatedBMI >= 25){ // Value between 25 - 29.9
            result = 'Overweight';
            document.body.style.background = "darkorange";
            document.body.style.transition = "all 2s";
        } else if (calculatedBMI >= 18.5){ // Value between 18.5 - 24.9
            result = 'Normal';
            document.body.style.background = "yellow";
            document.body.style.transition = "all 2s";
        } else if (calculatedBMI < 18.5){ // Value less than 18.5
            result = 'Underweight';
            document.body.style.background = "greenyellow";
            document.body.style.transition = "all 2s";
        } else {
            result = "";
            document.getElementById("valuetest").innerHTML = "";
            document.body.style.background = "white";
        }
    document.getElementById("valuetest").innerText = calculatedBMI;
    document.getElementById("valueResult").innerHTML = result;
}    
