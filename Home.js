console.log("worked");
songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let gif = document.getElementById('Gif');
let masterSong = document.getElementById('masterSong');

let songItems = Array.from(document.getElementsByClassName('roh'));
myProgressBar.value = 0; 

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
        
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})



// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        makeAllPlaysToPause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;  
        
    }
    else{
        audioElement.pause();
        makeAllPlaysToPause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlaysToPause = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

let clicked = true;

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 

        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        makeAllPlaysToPause();
        

        if(clicked == true){   
            
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            clicked = false;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
              
            
        }
        else{
            
            makeAllPlaysToPause();
            
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            audioElement.pause();
            gif.style.opacity = 0;
            clicked = true;
        }  
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;


    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    myProgressBar.value = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');   

})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    myProgressBar.value = 0; 
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


///Additional adjustments




document.getElementById("DJMode").addEventListener('click',()=>{
    set = true;
    if(set != false){

        var blink = false;
        var bodyelemet = document.querySelector('body')
        setInterval(()=>{
                        
            if(!blink){
                bodyelemet.style.backgroundColor = "blue";
            }
           
            else{
                bodyelemet.style.backgroundColor = "red";
            }
            blink = !blink; 
        }, 100);
        
        set = false;
    }

    else{
        clearInterval(myTimeout);

        }
    }) 

       
    
     