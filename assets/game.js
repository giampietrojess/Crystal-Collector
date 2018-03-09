var random_result;
var wins;
var losses;
var images = ['assets/images/Crystal1.png', 'assets/images/Crystal2.png', 'assets/images/Crystal3.png', 'assets/images/Crystal4.png'];

// Create a game with four crystals that have a random value 

random_result = Math.floor(Math.random() * 101 ) + 19;
$("#result").html(random_result);

// Create four crystals with 4 random numbers randomly on the page
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 12) +1;
    
    var crystals = $("<div>");
        crystals.attr({
        "class": ['crystals'],    
        "data-random": random
    });
        crystals.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

    $(".crystalbox").append(crystals)

}

$(".crystals").on('click', function() {
    console.log($(this));




});