let VideoTransition = document.getElementById("VedioTransition");
let Links=document.getElementById("Links");
let liveKick=document.getElementById("liveKick");
function removeTranstion() {
    interval = setInterval(() => {
        VideoTransition.classList.add("hidden");
    }, 2000); 
  }
  removeTranstion()

  function put_Links_home() {
   
    interval = setInterval(() => {
        Links.classList.remove("hiddenFromScreen");
    }, 2000); 
  }
  put_Links_home()
  function put_Live_home() {
 
    interval = setInterval(() => {
      liveKick.classList.remove("hiddenFromScreen");
    }, 2000); 
  }
  put_Live_home()


