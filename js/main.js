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

function setDrugEffect (srcDrugEffect, numVid) {
     const drug = document.getElementsByClassName("drug")
     const drug_physiqal = document.getElementsByClassName("drug-object")
     const vid = document.getElementById("video" + numVid);

     for (let i = 0; i < drug.length; i++) {
         for (let j = 0; j < drug_physiqal.length; j++) {
            const drug_location = drug_physiqal[j];
            const drugs = drug[i];
            vid.currentTime = 0;
            drug[i].setAttribute("sound", "src: url(/audio/"+ srcDrugEffect +"); autoplay: true; loop: true;")
            drug_physiqal[j].setAttribute("position", "100 100 100");
         }
     }
}


