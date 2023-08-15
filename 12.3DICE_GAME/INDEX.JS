
function palyGame()
{
    var random_num1=Math.round(Math.random()*6+1);
    var random_num2=Math.round(Math.random()*6+1);
    if(random_num1>6){
        random_num1=6;
    }
    if(random_num2>6){
        random_num2=6;
    }
var randomImageName="dice"+random_num1+".png";
var randomImageSRC="images/"+randomImageName;
var iamge1=document.querySelector("#player1 img");
iamge1.setAttribute("src",randomImageSRC);

var randomImageName2="dice"+random_num2+".png"
var randomImageSRC2="images/"+randomImageName2;
var image2=document.querySelector("#player2 img");
image2.setAttribute('src',randomImageSRC2);

var heading=document.querySelector('h1');
if(random_num1>random_num2)
{
  heading.textContent="Player1 Wins";
}
else if(random_num1<random_num2){
    heading.textContent='Player2 Wins';

}
else if(random_num1===random_num2){
    heading.textContent="It's Draw please try again";
}


}

function reset()
{
    var heading=document.querySelector('h1');
    var images=document.querySelectorAll('img');
    var image1=images[0];
    var image2=images[1];
    console.log(image1);
    console.log(image2);
    image1.setAttribute('src','images/dice6.png');
    image2.setAttribute('src','images/dice6.png');
    heading.innerHTML="Refresh Me";

}

palyGame();
