let toggleBtn = document.getElementById("nav-icon");

let links = document.getElementById("left");

toggleBtn.onclick = function () {
  
    links.classList.toggle("open");

};

document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("open")){

            links.classList.toggle("open");

        }

    } 
});

links.onclick = function (e) {

    e.stopPropagation();

}
