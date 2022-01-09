AFRAME.registerComponent('door', {
    init: function () {
        var el = this.el;
        this.open = function() {
            el.setAttribute("animation-mixer", "timeScale: 1; clampWhenFinished: true; loop: once")
        }
        el.addEventListener("click", this.open)

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });