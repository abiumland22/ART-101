// the clicker button program 

// we create a variable named "count", the intial value is 0

let count=0;
let colors=[0, "green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// we listened for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click(function(){
    // what to do when the button is clicked
    // first, set a new value for "count", which is the current vaule +1
    count = count+1;

    console.log(count);
    console.log(colors[count-1]);

    // now lets find our button and set a new text for it
    buttonText="stawp it " + count + " times and color is " + colors[count-1];
    
    $("#needy-button").html(buttonText);

    $("body").css("background-color", colors[count-1]);

    $("body").append("<img src='" +colors[count-1] +"scenic.jpeg'>")
})
