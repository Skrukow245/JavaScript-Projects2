function Animal_Function()  {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;        //switch
    var Animal_String = " is a great animal!";
    switch(Animals)  {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Ferret":
            Animal_Output = "Ferret" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}



function Hello_World_Function()  {
    var A = document.getElementsByClassName("Click");     //getelement class 
    A[0].innerHTML = "The text has changed!";
}


function CanvasGraphics()  {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
}
