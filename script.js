 var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomnumber1 + ".png";
var randomSource = "images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);
 var randomnumber2 = Math.floor(Math.random()*6)+1;
 var imageSource2 = "images/dice"+ randomnumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",imageSource2);
 if(randomnumber1>randomnumber2){
    document.querySelector("h1"). innerHTML="Player 1 Win! &#127881"}
    else if(randomnumber1<randomnumber2){
document.querySelector("h1").innerHTML="player 2 Win &#127881"
    }
    else 
    {
        document.querySelector("h1").innerHTML="Draw &#129309"
    }
    //  <button onClick="window.location.reload();">Refresh Page</button>