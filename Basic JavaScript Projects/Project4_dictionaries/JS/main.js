function my_dictionary(){
    var human_traits = {  //traits of the object
        Eye_color: "brown",
        skin_tone: "light",
        height: "average",
        age: 22,
        birthPlace: "California"
    };
    delete human_traits.birthPlace; //deleting the contents of one of the variables
    document.getElementById("dict").innerHTML = human_traits.birthPlace; /*displaying
    deleted content*/
}