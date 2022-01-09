AFRAME.registerComponent("distanceCalculator", {
    init: function() {
      this.vid1 = document.getElementById("vid1")
      this.vid2 = document.getElementById("vid2")
    },
    tick: function() {
      let cameraPos = this.el.object3D.position
      let vid1Pos = this.vid1.object3D.position
      let vid2Pos = this.vid2.object3D.positon
      let distanceVidPos1 = cameraPos.distanceTo(vid1Pos)
      let distanceVidPos2 = cameraPos.distanceTo(vid2Pos)

    console.log(distanceVidPos1)
    console.log(distanceVidPos2)

    }
  })

