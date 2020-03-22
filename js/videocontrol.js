var myVideo = document.getElementById("myvideo");
var vPlay = document.getElementById("vplay");
var vPause = document.getElementById("vpause");
var btnCover = document.getElementsByClassName("button_cover");

vPlay.addEventListener("click", function() {
  myVideo.play();
});
vPause.addEventListener("click", function() {
  myVideo.pause();
});

// for (var i = 0; i < btnCover.length; i++) {
// for (var j = 0; j < btnCover.length; j++) {
//   btnCover[j].addEventListener("click", function(ev) {
//     btnCover[j].classList.remove("button_show");
//     ev.target.nextSibling.classList.add("button_show");
//   });
// }
// }
