function foodFunction(){
    let output;
    let food = document.getElementsByClassName("food").value;
    let foodString = " is a great food";
    switch(food){
        case "Bacon":
            output = "Bacon" + foodString;
        break;
        case "Pizza":
            output = "Pizza" + foodString;
        break;
        case "Burger":
            output = "Burger" + foodString;
        break;
        case "Salad":
            output = "Salad" + foodString;
        break;
        case "Chocolate":
            output = "Chocolate" + foodString;
        break;
        default:
            output = "PLease enter a color exactly as written on the list above.";
    }
    document.getElementById("output").innerHTML = output;
}