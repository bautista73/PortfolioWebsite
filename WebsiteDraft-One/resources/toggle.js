function toggle() {
    var element = document.body;
    element.classList.toggle("dark");
}

var bar = document.getElementsByClassName('btn-scroll_bar_content')

var tween = TweenMax.to(bar, 0.85, {
  height: '100%',
  opacity: .95,
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.15,
  ease: Power1.easeOut,
})