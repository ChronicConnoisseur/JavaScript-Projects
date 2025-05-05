//typeof and type coersion
document.write(typeof "twelve");
document.write("<br>");
document.write("10" + 5);
document.write("<br>");

//not a number
document.write(0/0);
document.write("<br>");

//is a number?
document.write(isNaN("string"))
document.write("<br>");
document.write(isNaN(7));
document.write("<br>");

//displaying infinity
function infinity(){
    var x= 2E310;
    var y= -2E310;
    document.getElementById("infinity").innerHTML = x
    document.getElementById("nInfinity").innerHTML = y
}

//boolean intro function
function boolean(){
    var x = (12>5), y = (12<5);
    document.getElementById("true").innerHTML = x;
    document.getElementById("false").innerHTML = y;
}

//console output
console.log(4 * 4);
console.log(12 < 1);

//equivelency operators
document.write("<br>");
document.write("equivelency operators");
document.write("<br>");
document.write(12 == 4*3);
document.write("<br>");
document.write(12 == 4);
document.write("<br>");
document.write(12 === 12);
document.write("<br>");
document.write(12 === true)
document.write("<br>");
document.write(12 === "twelve");
document.write("<br>");
document.write(12 === 4);


//and or operators
document.write("<br>");
document.write("and/or operators");
document.write("<br>");
document.write(12>5 && 12<100);
document.write("<br>");
document.write(12>5 && 12>100);
document.write("<br>");
document.write(12>5 || 12>100);
document.write("<br>");
document.write(12<5 || 12>100);

//not operators
document.write("<br>");
document.write("not operator");
document.write("<br>");
document.write(!(20>10));
document.write("<br>");
document.write(!(20<10));