lighton = [true,true,true];
let numberjuke = 0

function toggleLight(number, arrayPosition) {
    newArrayPosition = arrayPosition - 1;
    
    const fakkel = document.getElementById("fakkel"+ number);

    if(lighton[newArrayPosition])
    {
        console.log(fakkel.getAttribute("position"))
        fakkel.setAttribute("light", "type: point; color: white; intensity: 5; distance: 2;")
        lighton[newArrayPosition] = false;
    }
    else if (lighton[newArrayPosition] == false) {
        fakkel.setAttribute("light","type: point; color: white; intensity: 0.2; distance: 2;")
        lighton[newArrayPosition] = true;
    }
}

function setDrugEffect() {
     const drug1 = document.getElementById("drug1")
     const drug2 = document.getElementById("drug2")

     const drug_physiqal = document.getElementsByClassName("drug-object")
     const vid1 = document.getElementById("video1");
     const vid2 = document.getElementById("video2");

     drug1.setAttribute("sound", "src: url(/audio/drug_video1.wav); autoplay: true; loop: true;")
     drug2.setAttribute("sound", "src: url(/audio/drug_video2.wav); autoplay: true; loop: true;")
     
    vid1.currentTime = 0;
    vid2.currentTime = 0;

    for (let i = 0; i < drug_physiqal.length; i++) {
        const druglocation = drug_physiqal[i];
        druglocation.setAttribute("position", "100 100 100");
    }
}

function playVideo_Audio(num1, num2, num3, num4) {
    vid1 = document.getElementById("vid" + num1);
    vid2 = document.getElementById("vid" + num2);
    vid3 = document.getElementById("vid" + num3);
    vid4 = document.getElementById("vid" + num4);

    audio1 = document.getElementById("drug" + num1);
    audio2 = document.getElementById("drug" + num2);
    audio3 = document.getElementById("drug" + num3);
    audio4 = document.getElementById("drug" + num4);
    
    audio1.setAttribute("sound", "volume: 1; autoplay: true;")
    audio2.setAttribute("sound", "volume: 1; autoplay: true;")
    audio3.setAttribute("sound", "volume: 1; autoplay: true;")
    audio4.setAttribute("sound", "volume: 1; autoplay: true;")

    vid1.components.material.material.map.image.play();
    vid2.components.material.material.map.image.play();
    vid3.components.material.material.map.image.play();
    vid4.components.material.material.map.image.play();
}

function setMuted (currentVid) {
    currentVideo = document.getElementById("so" + currentVid);
    currentVideo.setAttribute("sound", "volume: 0;")
}

function setVolumeNormal (currentVid)  {
    currentVideo = document.getElementById("so" + currentVid);

    currentVideo.setAttribute("sound", "volume: 0.1;");
}

function setVisibleNone() {
    const test = document.getElementById("door2_t")
    test.parentElement.removeChild(test);
}

function setJukebox() {
    jukebox = document.getElementById("jukebox")

    numberjuke += 1

    if (numberjuke%2 == 0) {
        jukebox.setAttribute("sound", "volume: 1;")
    }

    else {
        jukebox.setAttribute("sound", "volume: 0;")
    }
}

function setTitle(number) {
    title = document.getElementById("title")
    const api_base_url = "https://api.punkapi.com/v2/"
    let api_args = "beers/"

    fetch(api_base_url + api_args + number)
    .then(response => response.json())
    .then(data => {
        title.setAttribute("value", "Geniet van uw " + data[0].name)
        console.log(data[0].name)
    })
    console.log(document.getElementById("hendel"))
    startHendel()
}

function startHendel(){
    document.getElementById("hendel").setAttribute("animation-mixer", "timeScale:1")
    setTimeout(stopHendel, 2000)
}

function stopHendel() {
    document.getElementById("hendel").setAttribute("animation-mixer", "timeScale:0")
}

function closeUitleg() {
    const uitleg = document.getElementById("js--uitleg")
    const jukebox = document.getElementById("jukebox")
    uitleg.parentNode.removeChild(uitleg);
    jukebox.components.sound.playSound()
}
