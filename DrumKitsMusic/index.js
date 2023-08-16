//creating  a array of the btns that are associated with the class drums
const btns=document.querySelectorAll('.drum');
console.log(btns);

for(var i=0;i<btns.length;i++)
{   //Giving event listener to all the buttons

    btns[i].addEventListener('click',function(event){
        var btnInerHTML=this.innerHTML;
        playSong(btnInerHTML);
        addBtnAnimation(btnInerHTML)
    })
}

// part of code where we use the keydown event and paly song through key stroke.
document.addEventListener('keydown',function(event){
    //event is passed as which event is currently performed and then  event.key gives the key stroke that is associated with that particular event.
    var word=event.key; 
    playSong(word);
    addBtnAnimation(word);
})

function playSong(word)
{
    switch(word)
    {
        case "w":
                var tom1=new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;

            case "a":
                var tom2=new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;

            case "s":
                var tom3=new Audio("./sounds/tom-3.mp3");
                tom3.play();
            break;
            case "d":
                var tom4=new Audio("./sounds/tom-4.mp3");
                tom4.play();
            break;
            case "j":
                var snare=new Audio("./sounds/snare.mp3");
                snare.play();
            break;
            case "k":
                var kick=new Audio("./sounds/kick-bass.mp3");
                kick.play();
            break;
            case "l":
                var crash=new Audio("./sounds/crash.mp3");
                crash.play();
            break;

            default:
                alert("Please pass a valid button")


        }
}

// var audio=new Audio('./sounds/tom-1.mp3');
//         audio.play();

function addBtnAnimation(word)
{
 // as we have a class of the words they are asociated 
 var activeButton=document.querySelector('.'+word);

 //we will  add and remove the class pressed to show like an animation 
 activeButton.classList.add('pressed');
 
 setTimeout(function(){activeButton.classList.remove('pressed')},100);

}