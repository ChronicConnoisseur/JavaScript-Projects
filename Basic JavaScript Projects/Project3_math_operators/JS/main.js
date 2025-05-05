//Addition function
function additionF() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}
//subtraction function
function subtract() {
    var subtract = 5 - 3;
    document.getElementById("subtract").innerHTML = "5 - 3 = " + subtract;
}
//division function
function divide() {
    var divide = 64 / 8;
    document.getElementById("divide").innerHTML = "64 / 8 = " + divide;
}
//multiplication function
function multiply() {
    var multi = 42 * 67;
    document.getElementById("multi").innerHTML = "42 x 67 = " + multi;
}
// () function
function simpleMath() {
    var simple = (((2 * 7) + 6) / 2) + 20;
    document.getElementById("simple").innerHTML = "((2 * 7) + 6) / 2 + 20 = " + simple;
}
// modulous remainder function
function remainder() {
    var simple = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple;
}
//returning a negative value function
function neg() {
    var x = 10;
    document.getElementById("neg").innerHTML = "The negetive of 10 is: " + -x;
}
// increments function
function increment() {
    var x = 10, y = 10;
    x++;
    y--;
    document.write("10++ = " + (x) + "<br>");
    document.write("y-- = " + (y) + "<br>");
}
//returning a random # function
function rando(){
    var x = Math.random() * 1000;
    document.write((x) + "<br>")
}
//Getting a random number and returing a rounded version to the nearest full integer function
function rounding(){
    var x = Math.random() * 1000;
    x = Math.round(x);
    document.write((x) + "<br>")
}