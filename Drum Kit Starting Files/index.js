for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function () {
    
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();

    });

}