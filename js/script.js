// TypeWriting upon Load
var i = 0;
var full_name = "Edward Passagi";
var speed = 50; //speed in ms

function typeWriter(){
    if(i < full_name.length){
        document.getElementById("typewriter").innerHTML += full_name.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}