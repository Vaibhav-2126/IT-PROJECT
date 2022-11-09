const b=document.querySelector("#i1");
const c=document.querySelector("#i2");
b.addEventListener("mouseover",function(){
    // document.querySelector("#i1").style.transform = "scale(1.2,1.2)";
    document.querySelector("#i1").style.opacity="0.3";
})

b.addEventListener("mouseout",function(){
    // document.querySelector("#i1").style.transform = "scale(1,1)";
     document.querySelector("#i1").style.opacity="1";
})

c.addEventListener("mouseover",function(){
    document.querySelector("#i2").style.transform = "scale(1.2,1.2)";
})

c.addEventListener("mouseout",function(){
    document.querySelector("#i2").style.transform = "scale(1,1)";
})

