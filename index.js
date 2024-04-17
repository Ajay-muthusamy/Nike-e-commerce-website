
const navbar = document.querySelector('.nav-bar');
navbar.style.maxHeight = "0px";
function togglemenu(){
    if(navbar.style.maxHeight == "0px"){
        navbar.style.maxHeight = "300px"
    }
    else{
        navbar.style.maxHeight = "0px"
    }
}