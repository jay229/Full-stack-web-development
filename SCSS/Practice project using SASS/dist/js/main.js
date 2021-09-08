const menuBtn=document.querySelector(".menu-btn");
const burger=document.querySelector(".menu-btn-burger");
menuBtn.addEventListener("click",togglemenu);
let showMenu=false;
function togglemenu(){
    if(!showMenu){
        burger.classList.add('open');
        showMenu=true;
    }
    else{
        burger.classList.remove('open');
        showMenu=false;
    }
}