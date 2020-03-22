const heroThumb = document.querySelector(".hero_thumbs ul div li");
var heroName = document.getElementsByClassName("hero_name"),
  heroLi = document.getElementsByClassName("hero_li"),
  hmcHero = document.getElementsByClassName("heros_main2");

for (var i = 0; i < heroLi.length; i++) {
  heroLi[i].addEventListener("mouseenter", function(ev) {
    for (var j = 0; j < heroName.length; j++) {
      heroName[j].classList.remove("active");
      ev.target.parentNode.classList.add("active");
      activateBody();
    }
  });
}
function activateBody() {
  //panel-body 모두 안보이도록 answer, display:none;
  for (var x = 0; x < hmcHero.length; x++) {
    hmcHero[x].style.display = "none";
  }
  var activePanel = document.querySelector(".hero_name.active .heros_main2");
  activePanel.style.display = "flex";
}
activateBody();
