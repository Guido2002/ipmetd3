AFRAME.registerComponent('cig', {
    init: function () {

        var data = this.data;
        var el = this.el;

        var audio = new Audio("../audio/cigsoundeffect.wav");
        const fog = document.getElementById("fog")
        audio.volume = 0.8;
        this.playAudio = function(){
            audio.play();
            fog.setAttribute("environment", "fog: 1;")
        }
        el.addEventListener("click", this.playAudio);
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });