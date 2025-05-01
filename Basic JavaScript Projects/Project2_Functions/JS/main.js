//This function finds the element with the ID 'temp' and changes it's contents to something else
function changeString(){
    var x, y;
    x = document.getElementById("temp");
    x.textContent = "Changed by Java Script";
};

function concatString(){ //this function finds the element with the id concat. It combines 2 different strings into a variable called sentence
    //Then it replaces the contents of the element with id concat to the contents of the variable sentence
    var x="String one", y=" string 2", z;
    sentence = x += y;
    z= document.getElementById("concat").innerHTML = sentence;
}