function calc() {
    var h = parseFloat(document.querySelector("#height1").value);
    var w = parseFloat(document.querySelector("#weight1").value);
    var calculate;
    
    calculate = w / Math.pow(h,2);
    document.querySelector("#bmi").innerHTML = calculate;
    var res;
    if (calculate >= 16 & calculate <= 18.5)
    {
        res = "Underweight";
        document.querySelector("#result").style.color = "red";
    }
    else if (calculate > 18.5 & calculate <= 25.0)
    {
        res = "Normal";
        document.querySelector("#result").style.color = "green";

    }
    else if (calculate > 25.0 & calculate <= 40.0) {
        res = "Overweight";
        document.querySelector("#result").style.color = "red";

    }
    document.querySelector("#result").innerHTML = res;

    console.log(calculate);
}