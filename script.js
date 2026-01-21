const catImage = document.getElementById("catImage");
const nextBtn = document.getElementById("nextBtn");

function loadCat(){
    const url = "https://cataas.com/cat/funny?timestamp=" + new Date().getTime();
    catImage.src = url;
}

nextBtn.addEventListener("click", loadCat);

//load first cat when page opens
loadCat();