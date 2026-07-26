window.onload=function(){

setTimeout(()=>{

document
.getElementById("loading")
.style.display="none";

},2000);


}



function startGift(){

document
.querySelector(".hero")
.style.display="none";


document
.getElementById("gift")
.classList.remove("hidden");


let music=document
.getElementById("music");


music.play();


createHeart();

}



function createHeart(){

setInterval(()=>{


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.top="-20px";
heart.style.fontSize="20px";


heart.style.animation=
"fall 5s linear";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},5000);


},500);

}