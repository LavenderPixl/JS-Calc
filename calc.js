let fNumber = document.getElementById("firstNumber");
let sNumber = document.getElementById("secondNumber");
let result = document.getElementById("result");

function calculate(operator)
{
    result.innerHTML = eval(fNumber.value + operator + sNumber.value);
}
function clearCalc()
{
    fNumber.value = "";
    sNumber.value = "";
    console.log(fNumber)
}