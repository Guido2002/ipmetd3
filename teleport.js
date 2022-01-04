window.onload = () =>{
    const places = document.getElementsByClassName('fakkels');
    const camera = document.getElementById('js--camera');
  
    for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function(evt){
        let att = document.createAttribute("animation");
        att.value = "property: position; easing: linear; dur: 2000; to: " + (this.getAttribute('position').x + 0.5)+ " 1.6 " + this.getAttribute('position').z;
        camera.setAttribute('animation', att.value);
      });
    }
  };