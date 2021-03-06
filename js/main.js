lighton = [true,true,true];

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

    audio1.components.sound.playSound()
    audio2.components.sound.playSound()
    audio3.components.sound.playSound()
    audio4.components.sound.playSound()

    vid1.components.material.material.map.image.play();
    vid2.components.material.material.map.image.play();
    vid3.components.material.material.map.image.play();
    vid4.components.material.material.map.image.play();
}

function setMuted (currentVid, anotherVid, anotherVid2, anotherVid3) {
    currentVideo = document.getElementById("drug" + currentVid);
    anotherVideo = document.getElementById("drug" + anotherVid);
    anotherVideo2 = document.getElementById("drug" + anotherVid2);
    anotherVideo3 = document.getElementById("drug" + anotherVid3);

    currentVideo.setAttribute("sound", "volume: 1;")
    anotherVideo.setAttribute("sound", "volume: 0;")
    anotherVideo2.setAttribute("sound", "volume: 0;")
    anotherVideo3.setAttribute("sound", "volume: 0;")

    lightOff()
}

function lightOff(){
    document.getElementById("zaklamp").setAttribute("light", "type: point; intensity: 0.1")
}


function setVolumeNormal (currentVid, anotherVid, anotherVid2, anotherVid3)  {
    currentVideo = document.getElementById("drug" + currentVid);
    anotherVideo = document.getElementById("drug" + anotherVid);
    anotherVideo2 = document.getElementById("drug" + anotherVid2);
    anotherVideo3 = document.getElementById("drug" + anotherVid3);

    currentVideo.setAttribute("sound", "volume: 1;")
    anotherVideo.setAttribute("sound", "volume: 1;")
    anotherVideo2.setAttribute("sound", "volume: 1;")
    anotherVideo3.setAttribute("sound", "volume: 1;")

    lightOn()
}

function lightOn(){
    document.getElementById("zaklamp").setAttribute("light", "type: spot; intensity: 0.6")
}

function setVisibleNone() {
    const test = document.getElementById("door2_t")
    test.parentElement.removeChild(test);
}

function closeUitleg() {
    const uitleg = document.getElementById("js--uitleg")
    
    uitleg.parentNode.removeChild(uitleg);
}

