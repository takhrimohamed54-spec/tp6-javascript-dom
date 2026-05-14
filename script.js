let div=document.getElementById("div1");
let p=document.getElementById("p1");
p.innerText="le txte a été modifie ";
p.style.backgroundColor="lightblue";
p.style.padding="10px";
div.addEventListener("click",function(){
    p.innerText="un clic a ete detecte"
});
