lighton = [true,true,true];

function toggleLight(number, arrayPosition) {
    console.log("asdjas")
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

function setDrugEffect () {
     const drug = document.getElementsByClassName("drug")
     const drug_physiqal = document.getElementsByClassName("drug-object")
     const vid1 = document.getElementById("video1");

     for (let i = 0; i < drug.length; i++) {
         for (let j = 0; j < drug_physiqal.length; j++) {
            const drug_location = drug_physiqal[j];
            const drugs = drug[i];
            vid1.currentTime = 0;
            drugs.setAttribute("sound", "src: url(/audio/drug_video1.wav); autoplay: true; loop: true;")
            drug_location.setAttribute("position", "100 100 100");
         }
     }
}


