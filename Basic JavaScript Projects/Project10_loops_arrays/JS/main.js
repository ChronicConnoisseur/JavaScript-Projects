function Call_Loop(){
    var counter = 0;
    var list = "";
    while (counter < 11){ //while loop continues "while" the following statement is true
        list += "<br>" + counter;
        counter++;
    }
    document.getElementById("loop").innerHTML = list;
}

function forLoop(){
    var x = ["Apple", "Elephants", "Godzilla", "Orange", "Pear", "King Kong", "Reptile"]
    let content = "";
    var i;

    for (i=0; i<x.length; i++){ //i is iterations used in this for loop
        content += x[i] + "<br>"; //using [i] returns whichever element of the array is there
    }
    document.getElementById("list").innerHTML = content;
}

function cat_pics(){ //basic array
    var catPics= [];
    catPics[0] = "sleeping";
    catPics[1] = "playing";
    catPics[2] = "eating";
    catPics[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " +
    catPics[2] + ".";
}

function constFunc(){ //function utizlizing const and showcasing what is allowed to change
    const instrument = {type:"guitar", brand:"Fender", color:"black"};
    instrument.color = "blue";
    instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " +
    instrument.type + " was " + instrument.price + " and the color is " +
    instrument.color;
}

let car = {  //car object
    make: "dodge",
    model: "viper",
    year: "2021",
    color: "red",
    description: function() { //sends a statement to print on screen
        return `The car is a ${this.year} ${this.color} ${this.make} ${this.model}`;
    }
}
document.getElementById("carObject").innerHTML = car.description();

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  // Exit the loop when i is 5
    }
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;  // Skip to the rest of the loop when i is 5
    }
    console.log("Value of i:", i);
}