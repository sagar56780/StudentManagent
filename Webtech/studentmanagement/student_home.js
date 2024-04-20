var nav_button=document.getElementById("nav-button");
console.log(nav_button);
var burger=document.getElementById("burger");
var boolean=true;

nav_button.addEventListener("click",()=>{
    if(boolean==true){
        burger.style.display="block";
        boolean=false;
    }
    else{
        burger.style.display="none";
        boolean=true;

    }
 

})