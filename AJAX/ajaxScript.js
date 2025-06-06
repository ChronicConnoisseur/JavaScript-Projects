function getMsg(){
    //Step 1: Setup XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you a" +
        inputVal + " for signing up!";
    }
    /*Step 2: Prepare the type of request and what to
    request from the server
    */
    ajaxRequest.open('GET', 'response.html', true);
    /*STEP 3: Defines the AJAX response callback method that
    esthablishes whether the response was successful and where
    the data should be displayed */
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //Step 4: send the request
    ajaxRequest.send;
}