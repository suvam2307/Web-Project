console.log("well come to java script");

// initializing the variable 

var audioElement=new Audio('./songs/1.mp3');
var masterPlay=document.getElementById('masterPlay');
var myProgressBar=document.getElementById('myProgressBar');
var gif=document.getElementById('gif');
var songItems=Array.from(document.getElementsByClassName('songPlaying'));
var playing=document.getElementById('playing');


//creating a  arrry of object consisting all the songs information.
var songIndex=0;
var songs=[
    {songName:"let me love you", songPath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName:"song2 tunnning", songPath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
    {songName:"song3 tunning", songPath:"./songs/3.mp3",coverPath:"./covers/3.jpg"},
    {songName:"song4 tunning", songPath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},
    {songName:"song5 tunning", songPath:"./songs/5.mp3",coverPath:"./covers/5.jpg"},
    {songName:"song6 tunning", songPath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
    {songName:"song7 tunning", songPath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
]

songItems.forEach((element,index)=>{
   
    element.getElementsByTagName('img')[0].src=songs[index].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[index].songName;
})

//play pause  and continue


masterPlay.addEventListener('click',function(event){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); // to palay an audio.
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause(); // to palay an audio.
        masterPlay.classList.remove("fa-circle-pause"); // remove the pause button  and  add the play button.
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }   
})

//Updation of progressBar 

audioElement.addEventListener('timeupdate',function(){
    console.log("timeupdate");
    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})

// when we change the progressbar the time song also get updated

myProgressBar.addEventListener('change',function(){
    var val=myProgressBar.value;
    var duration=(val*audioElement.duration)/100;
    audioElement.currentTime=duration;
})


// play from the song list

var songPlayButtons=Array.from(document.getElementsByClassName("playSong"));

const makeAllPlays=()=>{
songPlayButtons.forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play')
})
}

songPlayButtons.forEach((element,i)=>{
element.addEventListener('click',function(event){
console.log(event);
//finding which song is playing
var songIndex=parseInt(event.target.id);
makeAllPlays(); // make  all other song playButtons play.
event.target.classList.remove('fa-circle-play');
event.target.classList.add('fa-circle-pause');
audioElement.src=`./songs/${songIndex+1}.mp3`;
audioElement.currentTime=0;
audioElement.play();
gif.opacity=1;
playing.innerHTML=songs[songIndex].songName;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})

})

var forward=document.getElementById('forward');
forward.addEventListener('click',function(){
    if(songIndex<=6 && songIndex>=0){
        songIndex=songIndex+1;
        audioElement.src=`./songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0
        audioElement.play();
        gif.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        makeAllPlays();
        playing.innerHTML=songs[songIndex].songName;
        songPlayButtons[songIndex].classList.remove('fa-circle-play');
        songPlayButtons[songIndex].classList.add('fa-circle-pause');

    }
    else{
        songIndex=0;
    }
   

})

var backward=document.getElementById('backward');
backward.addEventListener('click',function(){
    if(songIndex<=6 && songIndex>=0)
    {
        songIndex=songIndex-1;
        audioElement.src=`./songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0
        audioElement.play();
        gif.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        makeAllPlays();
        playing.innerHTML=songs[songIndex].songName;
        songPlayButtons[songIndex].classList.remove('fa-circle-play');
        songPlayButtons[songIndex].classList.add('fa-circle-pause');


    }
    else{
        songIndex=0;
    }
   

})







