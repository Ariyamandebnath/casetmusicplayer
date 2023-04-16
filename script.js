console.log('welcome to Caset');

//Initialize the variables
let songIndex = 0;
let audioElement= new Audio('songs/smoke-143172.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressiveBar');
let gif= document.getElementById('gif');
let songs= [
    {songName:"Ami Bodle Jabo", filePath:"song/smoke-143172.mp3", coverPath:"song/1.jpg"}

]

//audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;


    }
    else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
    
    }
}) 

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value*audioElement;
})
   