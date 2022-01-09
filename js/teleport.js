window.onload = () =>{
    const places = document.getElementsByClassName('fakkels');
    const camera = document.getElementById('js--camera');

    pickups = document.getElementsByClassName("js--pickup")
    let hold = null;



  for (let j = 0; j < pickups.length; j++) {
    pickups[j].addEventListener('click', function(evt){
      if (hold == null) {
        camera.innerHTML += '<a-entity gltf-model="#cig" cig position="1 -1 -1" rotation="0 0 90"></a-entity>';
        hold = "entity";
        this.remove();
      }
    });
  }
  
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(){
        let att = document.createAttribute("animation");
        att.value = "property: position; easing: linear; dur: 2000; to: " + (this.getAttribute('position').x + 0.5)+ " 1.6 " + this.getAttribute('position').z;
        camera.setAttribute('animation', att.value);
      });
    }
  };