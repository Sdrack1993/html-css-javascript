// Adding CSS

$("h1").addClass("big-title margin-50");
$("h1").text("Bye")

//Manipulating text

$("button").text("Dont click me");

//Manipulating Attributes

$("a").attr("href", "https://www.google.com");


// Adding event listener

$("h1").click(function() {
    $("h1").css("color", "brown");

});

// Adding event listener without using JQuery

//for(var i = 0; i<5; i++){
    //document.querySelectorAll("button")[i].addEventListener("click", function(){
      //  document.querySelector("h1").style.color = "blue";

   // });
//}

// With Jquery

$("button").click(function(){
    $("h1").css("color", "green");
});