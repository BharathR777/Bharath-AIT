// DOM -> document object model

function init(){
    const hamburger=document.querySelector(".Hamburger");
    const sidebar=document.querySelector(".sidebar-container");
    const closebutton=document.querySelector(".close-button");
    
    const opensidebar=()=>{
        sidebar.classList.add("show-sidebar");
        console.log(sidebar.classList);
    }
    hamburger.addEventListener("click",opensidebar);
    
    const closesidebar=()=>{
        sidebar.classList.remove("show-sidebar");
    }
    sidebar.addEventListener("click",closesidebar);  
}
init();

function navrelatedcode(){
    const navcontainer=document.querySelector(".nav-container");
    window.addEventListener("scroll",function(){
        const scrollnumber=window.scrollY;
        const targetnumber= 100; //window.innerWidth>=992?100:50;
        //console.log(targetnumber);
        if(scrollnumber>targetnumber){
            navcontainer.classList.add("sticky-nav");
            //console.log(navcontainer.classList);
        } else{
            navcontainer.classList.remove("sticky-nav");
        }
    });
}
navrelatedcode();   
