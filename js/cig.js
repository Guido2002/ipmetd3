AFRAME.registerComponent('cig', {
    init: function () {

        var data = this.data;
        var el = this.el;

        var audio = new Audio("../audio/cigsoundeffect.wav");
        audio.volume = 0.8;
        this.playAudio = function(){
            audio.play();
            el.setAttribute("position", "100 100 100");
        }
        el.addEventListener("click", this.playAudio);
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });