var random_result;
var wins = 0;
var losses = 0;
var images = ['assets/images/Crystal1.png', 'assets/images/Crystal2.png', 'assets/images/Crystal3.png', 'assets/images/Crystal4.png'];
var previous = 0;


// Create a game with four crystals that have a random value 

var resetAndStart = function () {
    $(".crystalbox").empty();

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

    $("#previous").html(previous);

}    
resetAndStart();



// When you click the crystal
$(document).on('click', ".crystals", function() {
    // Apply the data value to a number
    var num =  parseInt($(this).attr('data-random'));
    // Take the previous number and add it to the current number
    previous += num;
    $("#previous").html(previous);
    // If the previous number is greater than the random result, add loss
    if(previous > random_result){
        losses++;
        $("#loser").html(losses);
        previous = 0;
        resetAndStart();
    }
    // If the previous number is equal to the random result, add win
    else if(previous === random_result) {
        wins++;
        $("#winner").html(wins);
        previous = 0;
        resetAndStart();
    }

});



