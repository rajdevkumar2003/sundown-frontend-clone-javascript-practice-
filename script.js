// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elemC=document.querySelector("#elem-container");
var fixed=document.querySelector("#fixed-container");


elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
});

elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
});

var elems=document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter",function(){
        var img=e.getAttribute("data-image");
        fixed.style.backgroundImage=`url(${img})`;
    });
})