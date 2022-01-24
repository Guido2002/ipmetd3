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
     const drug2 = document.getElementById("drug2")

     const drug_physiqal = document.getElementsByClassName("drug-object")
     const vid2 = document.getElementById("video2");

     drug2.setAttribute("sound", "src: url(/audio/drug_video2_louder.wav); autoplay: true; loop: true;")
     
    vid2.currentTime = 0;
    console.log(drug2)

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

function setMuted (currentVid, anotherVid, anotherVid2, anotherVid3) {
    currentVideo = document.getElementById("drug" + currentVid);
    anotherVideo = document.getElementById("drug" + anotherVid);
    anotherVideo2 = document.getElementById("drug" + anotherVid2);
    anotherVideo3 = document.getElementById("drug" + anotherVid3);

    currentVideo.setAttribute("sound", "volume: 1;")
    anotherVideo.setAttribute("sound", "volume: 0;")
    anotherVideo2.setAttribute("sound", "volume: 0;")
    anotherVideo3.setAttribute("sound", "volume: 0;")
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
}

function setVisibleNone() {
    const test = document.getElementById("door2_t")

    test.parentElement.removeChild(test);

}

function changeVid(vid1) {
    vid = document.getElementById("video2")
    audio = document.getElementById("normal1990")
    drug_physiqal = document.getElementById("drug_physiqal")
    audiovid = document.getElementById("drug2");

    drug_physiqal.setAttribute('onclick', 'setDrugEffect('+ vid1 + ')')
    drug_physiqal.setAttribute("position", "-0.7 1 0.2");

    vid.setAttribute("src", "../video/mk_"+ vid1 +".mp4")
    audio.setAttribute("src", "/audio/normal_mk_" + vid1 + ".wav")
    vid.currentTime = 0
    audio.play()
}

function setDrugEffect(number) {
    const drug_physiqal = document.getElementById("drug_physiqal")
    const vid2 = document.getElementById("video2");
    audio = document.getElementById("normal1990")

    console.log(audio)
    audio.setAttribute("src", "/audio/drug_mk_" + number + ".wav")
    console.log(audio)
   vid2.currentTime = 0;
   audio.play()

    drug_physiqal.setAttribute("position", "100 100 100");
   }