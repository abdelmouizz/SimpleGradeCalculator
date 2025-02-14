function calculateResult() {
    let percentage = [0.6 , 0.4];
    let multipliers = [3, 3, 3, 2, 2, 2, 1]; 
    let total = 0;

    for (let i=0; i<6; i++){
        let num1 = parseFloat(document.getElementById(`num${i * 2 + 1}`).value);
        let num2 = parseFloat(document.getElementById(`num${i * 2 + 2}`).value);
        total += (num1 * percentage[0] + num2 * percentage[1]) * multipliers[i];
    }

    let num13 = parseFloat(document.getElementById("num13").value);
    total += num13 * multipliers[6];

    let result = total / 16;
    document.getElementById("result").innerHTML = "Results :" + result.toFixed(2) + "/20";
    if (result >= 10) {
        document.getElementById("result").style.color = "green";
    } else if (result < 10) {
        document.getElementById("result").style.color = "red";
    }
 }

/* function calculateResult() {
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let num3 = document.getElementById("num3").value;
let num4 = document.getElementById("num4").value;
let num5 = document.getElementById("num5").value;
let num6 = document.getElementById("num6").value;
let num7 = document.getElementById("num7").value;
let num8 = document.getElementById("num8").value;
let num9 = document.getElementById("num9").value;
let num10 = document.getElementById("num10").value;
let num11 = document.getElementById("num11").value;
let num12 = document.getElementById("num12").value;
let num13 = document.getElementById("num13").value;
let mod1 = (parseFloat(num1 * 0.6)  + parseFloat(num2 * 0.4))*3;
let mod2 = (parseFloat(num3 * 0.6)  + parseFloat(num4 * 0.4))*3;
let mod3 = (parseFloat(num5 * 0.6)  + parseFloat(num6 * 0.4))*3;
let mod4 = (parseFloat(num7 * 0.6)  + parseFloat(num8 * 0.4))*2;
let mod5 = (parseFloat(num9 * 0.6)  + parseFloat(num10 * 0.4))*2;
let mod6 = (parseFloat(num11 * 0.6)  + parseFloat(num12 * 0.4))*2;
let mod13 = num13;

let y = mod1 + mod2 + mod3 + mod4 + mod5 + mod6 + parseFloat(mod13);
let x = y/16;
document.getElementById("result").innerHTML = "Result :" + x.toFixed(2) + "/20";
if (x >= 10) {
    document.getElementById("result").style.color = "green";
} else if (x < 10) {
    document.getElementById("result").style.color = "red";
} 
}
*/    
