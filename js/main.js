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
     
    for (let j = 0; j < drug_physiqal.length; j++) {
        const drug_location = drug_physiqal[j];
        vid1.currentTime = 0;
        vid2.currentTime = 0;
        drug1.setAttribute("sound", "src: url(/audio/drug_video1.wav); autoplay: true; loop: true;")
        drug2.setAttribute("sound", "src: url(/audio/drug_video2.wav); autoplay: true; loop: true;")
        drug_location.setAttribute("position", "100 100 100");
    }
}



