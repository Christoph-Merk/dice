document.querySelector(".img1").setAttribute("onclick","multiEvent(1)");
document.querySelector(".img2").setAttribute("onclick","multiEvent(2)");
document.querySelector("button").setAttribute("onclick", "reset()");

function reset(){
    refreshImage(1,1);
    refreshImage(2,1);
    document.querySelector("h1").innerHTML="Refresh Me";
}


function multiEvent(imageNumber){
    dice(imageNumber);
    getWinner();
}
function dice(player){
    var number = Math.floor(Math.random()*6+1);
    refreshImage(player, number);
}

function refreshImage(player, number){
    var link = ("images/dice"+number+".png")
    var img = (".img"+player)
    document.querySelector(img).setAttribute("src", link);
}

function getWinner(){
    var cube1Src = document.querySelector(".img1").getAttribute("src");
    var cube1 = cube1Src.slice(11,12);
    var cube2Src = document.querySelector(".img2").getAttribute("src");
    var cube2 = cube2Src.slice(11,12);
    if (cube1>cube2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (cube2>cube1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}