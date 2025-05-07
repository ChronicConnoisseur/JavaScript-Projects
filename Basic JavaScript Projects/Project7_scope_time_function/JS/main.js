var x = 10;
function localV(){
    var x = 15;
    return x;
}

function get_hours() { //get hours assignment plus if else statements
    let hour = new Date().getHours();

    if (hour < 12) {
        document.getElementById("gm").innerHTML = "Good Morning!";
    } else if (hour >= 12 && hour < 19) {
        document.getElementById("gm").innerHTML = "Good Afternoon!";
    } else {
        document.getElementById("gm").innerHTML = "Good Evening!";
    }
}

//more if else statements
function Age_function(){
    age = document.getElementById("Age").value;
    if (age>=18){
        vote = "you are old enough to vote!";
    }
    else{
        vote = "You are not old enough to vote!";
    }
    document.getElementById("how_old").innerHTML = vote;
}

//time function
function time_function(){
    var time = new Date().getHours();
    var Reply;
    if (time <12 == time > 0){
        Reply = "It is morning time!"
    }
    else if (time >= 12 == time <18){
        Reply = "It is afternoon";
    }
    else{
        Reply = "It is evening time";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
    }
