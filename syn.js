let btn=document.getElementById("btn");
let box=document.getElementById("box");

btn.addEventListener("click",function(){
    box.innerHTML="";
    setTimeout(function(){
        box.innerHTML+="<div class='message'>login</div>";

    },1000);

    setTimeout(function(){
        box.innerHTML+="<div class='message'>new emails</div>";

    },2000);

    setTimeout(function(){
        box.innerHTML+="<div class='message'>Meeting in 10 minutes</div>";

    },3000);

    setTimeout(function(){
        box.innerHTML+="<div class='message'>New msg</div>";

    },4000);



});