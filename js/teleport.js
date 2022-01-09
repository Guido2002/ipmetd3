window.onload = () =>{
    const places = document.getElementsByClassName('fakkel_1');
    const places2 = document.getElementsByClassName('fakkel_2');
    const places3 = document.getElementsByClassName('stage-object');
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

    for (let k = 0; k < places2.length; k++) {
      places2[k].addEventListener('click', function(){
        let att2 = document.createAttribute("animation");
        att2.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x+ " 1.6 " + (this.getAttribute('position').z - 0.5);
        camera.setAttribute('animation', att2.value);
      });
    }

    for (let h = 0; h < places3.length; h++) {
      places3[h].addEventListener('click', function(){
        let att3 = document.createAttribute("animation");
        att3.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x+ " 1.6 " + this.getAttribute('position').z;
        camera.setAttribute('animation', att3.value);
      });
    }

  };