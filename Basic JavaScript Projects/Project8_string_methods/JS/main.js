function concatDemo() { //combines two seperate strings into one
    var x = "This is ", y = "a string.";
    document.getElementById("concat").innerHTML = x.concat(y);
}

function sliceDemo(){ //shows how to slice from a speicific place or digit within
    //the string to another
    var x = "This is a full sentence about a Cow";
    document.getElementById("slice").innerHTML = x.slice(31,35);
}

function upper(){ //converts the text to uppercase but does not change
    //the variable contents
    let text = "The cow jumped over the moon";
    document.getElementById("upper").innerHTML = text.toUpperCase();
}

function searcher(){ //searches for a word within a string and displays its position
    let text = "The cow jumped over the moon";
    document.getElementById("search").innerHTML = text.search("over");
}

function stringer(){
    let number = 15 //converts an integer into a string
    document.getElementById("string").innerHTML = number.toString();
}

function precision(){ //dictates how many numbers in a integer
    var x = 1245.135243673457568445623412342335243634623452135;
    document.getElementById("precision").innerHTML = x.toPrecision(15);
}

function fixed(){
    let num = 27.3453453; //converts to string and limits decimal places
    document.getElementById("fixed").innerHTML = num.toFixed(4);
}

function ValueOf(){ //gets the primitive number of a number object
    let numObject = new Number(5);
    let x = numObject.valueOf();
    document.getElementById("valueof").innerHTML = x + 5;
}