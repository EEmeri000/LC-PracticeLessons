window.addEventListener("load", function (){

    let buttonClicks = 0;
    let theButton =  document.getElementById("the-button");
    theButton.addEventListener("click", event => {
    buttonClicks ++;
    document.getElementById("clicks").innerHTML = "The Count is: " + buttonClicks;
});
});

