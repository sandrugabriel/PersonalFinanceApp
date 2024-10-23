let menumobile= document.querySelector(".menu-mobile");
let menupc= document.querySelector(".menu-pc");

menumobile.addEventListener("click",(e)=>{

    let elem = e.target;
    if(elem.tagName == "IMG")
    window.location.href = elem.classList+".html";
});

menupc.addEventListener("click",(e)=>{

    let elem = e.target;
    if(elem.tagName == "IMG")
    window.location.href = elem.classList+".html";
});