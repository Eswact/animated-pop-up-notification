var invis = document.getElementById("duyuru");
function invisyap() {
  invis.classList.toggle("invis");
}

var ucur = document.getElementById("imd");
function firla() {
  ucur.classList.toggle("ucurt");
}

var dondur = document.getElementById("img1");
function doner() {
  dondur.classList.toggle("dondurt");
}

function getdata(){
  const dm = document.getElementById("duymes");
  fetch("veri.json")
  .then(response=>response.json())
  .then(veri=>{
    for(cek of veri)
    {
      dm.innerHTML+= '<p id="dp"><span class="fw">DUYURU :</span> '+cek.duyuru+'</p>'     
    }
  })
}
getdata();