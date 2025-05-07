//These 2 functions take in user input and tells the user if they eligable
function ride_function(){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function voter_age(){
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote."
}

//Creating and instatiating a class
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model  +
    " manufactured in " + Erik.Vehicle_Year;
}

//Challenge assignments utizlizing new keywords and nested functions
function newKeyword(){
    document.getElementById("New_and_This").innerHTML = "Utilizing new keyword";
}

function nestedFunction(){
    var x = function2()
    document.getElementById("nested_Function").innerHTML = x;
}

function function2(){
    var x = 2;
    x = Math.round((x*37) / 65);
    return x;
}