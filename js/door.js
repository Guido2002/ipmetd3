AFRAME.registerComponent('door', {
    init: function () {
        var el = this.el;
        this.toggleDoor = function() {
                el.setAttribute("animation-mixer", "timeScale: 1")
                setTimeout(stopDoor, 3000)
        }
        stopDoor = function() {
            el.setAttribute("animation-mixer", "timeScale: 0")
        }
        el.addEventListener("click", this.toggleDoor)

    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });