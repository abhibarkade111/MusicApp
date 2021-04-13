
const play= document.getElementById("play");
const title= document.getElementById("title");
const artist= document.getElementById("artist");
const prev= document.getElementById("prev");
const next= document.getElementById("next");
const music= document.querySelector("audio");
const img= document.querySelector("img");

const songs =[
    {
    name:"ab-1",
    title: "Kinna Sona ",
    artist: "Sunil Kamath",
},
{
    name:"ab-2",
    title: "Baarish Ki Jaaye",
    artist: "B Praak",
},
{
    name:"ab-3",
    title: "Majhi Baay Go",
    artist: "Keval Walanj,Sonali Sonawane",
},
{
    name:"ab-4",
    title: "Aye Khuda ",
    artist: "Arjit Singh",
},
{
    name:"ab-5",
    title: "Aai Tuz Deul",
    artist: "Yogesh Agravkar",
},
{
    name:"ab-6",
    title: "Mohabbat Phir Ho",
    artist: "Yasser Desai",
},
{
    name:"ab-7",
    title: "Ve Khudaya",
    artist: "Altaf Sayyad",
},
{
    name:"ab-8",
    title: "Kutti Mohabbat Ne",
    artist: "Jubin Nautiyal, Tanishk Bagchi",
},
{
    name:"ab-9",
    title: "Man Mohini",
    artist: "Rohit Shyam Raut",
},

];

let isPlaying=false;

const playMusic = () =>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};

const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
}
   
play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});
const loadSong= (songs) =>{
  title.textContent= songs.title;
  artist.textContent= songs.artist; 
  music.src = "music/"+ songs.name + ".mp3";
  img.src= "image/"+ songs.name +".jpg"; 

};
songIndex=0;

const nextSong = () =>{
    songIndex= (songIndex +1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () =>{
    songIndex= (songIndex - 1 + songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);




