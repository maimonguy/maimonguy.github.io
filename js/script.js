var array = [];
function newdeck(){
    "use strict";
    array = [1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,7,7,7,7,8,8,8,8,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
function display(title, description){
    if (title === "SORRY") {
        document.getElementById("title").textContent = "SORRY!";
    } else {
        document.getElementById("title").textContent = title;
    }
    document.getElementById("description").textContent = description;
    var history = document.getElementById("history").textContent.substring(10);
    if (String(history).match(new RegExp(",", "g")) || [].length < 10){
        history = title + ", " + history;
    } else { 
        history = title + ", " + history.substring(0, history.lastIndexOf(",") - 1);
    }
    document.getElementById("history").textContent = "History  = " +  history;
}
function draw(){
    "use strict";
    if (array.length === 0) {
        newdeck()
    }
    var card = array.pop()
    if (card === 1) {
        display("1", "Either move a pawn from Start or move a pawn one space forward.");
    } if (card === 2) {
        display("2", "Either move a pawn from Start or move a pawn two spaces forward. Draw an additional card.");
    } if (card === 3) {
        display("3", "Move a pawn three spaces forward.");
    } if (card === 4) {
        display("4", "Move a pawn four spaces backward.");
    } if (card === 5) {
        display("5", "Move a pawn five spaces forward.");
    } if (card === 7) {
        display("7", "Move one pawn seven spaces forward, or split the seven spaces between two pawns.");
    } if (card === 8) {
        display("8", "Move a pawn eight spaces forward.");
    } if (card === 10) {
        display("10", "Move a pawn ten spaces forward or one space backward.");
    } if (card === 11) {
        display("11", "Move eleven spaces forward, or switch the places of one of the player's own pawns and an opponent's pawn. A player who cannot move 11 spaces is not forced to switch and instead can forfeit the turn.");
    } if (card === 12) {
        display("12", "Move a pawn twelve spaces forward.");
    } if (card === 13) {
        display("SORRY", "Take any one pawn from Start and move it directly to a square occupied by any opponent's pawn, sending that pawn back to its own Start.");
    }
}
document.getElementById("title").onclick = function(){draw()};
document.getElementById("description").onclick = function(){draw()};
