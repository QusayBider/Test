
let audio = document.getElementById("audio");
let VideoTransition = document.getElementById("vedioTransition");
let VideoHome = document.getElementById("videoHome");
const mut_button = document.getElementById("mute-but");
var sound_state=true
 audio.volume = 0.05;

 mut_button.addEventListener( "click",() =>{
   if (sound_state) {
    sound_state=false;
    audio.volume=0; 
    mut_button.innerHTML = '<i class="fa-solid fa-volume-xmark fa-2xl"></i>';
   }
   else {
    sound_state=true;
    audio.volume=0.05; 
    
    mut_button.innerHTML = '<i class="fa-solid fa-volume-up fa-2xl"></i>';
   }
 });

 function removeTranstion() {
  
  interval = setInterval(() => {
      VideoTransition.classList.add("hidden");
      
  }, 2000); 
}

removeTranstion()
function put_video_home() {
 
  interval = setInterval(() => {
    
    VideoHome.classList.remove("hidden");
  }, 2000); 
}
put_video_home()

audio.muted = false; 
window.addEventListener("click", function() {
  let video = document.getElementById("audio");
  video.muted = false; 
  video.play(); 
});
