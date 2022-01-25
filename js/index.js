//Can be edited
let pathImg ="img/0";


let divMini = document.createElement("div");
divMini.style = "display:flex;"
document.querySelector(".containerGallery").append(divMini)
let maxImg = document.querySelectorAll(".containerImg img").length - 1; //Maximum images
let movePixels = document.querySelector(".containerImg img").clientWidth;
let divToMove = document.querySelector(".containerImg");

//Diapos
let imgDiapo =[]
for (let j=1;j<=maxImg+1;j++){
  imgDiapo[j]  = document.createElement("img");
  imgDiapo[j].src = pathImg +j+".jpg"; 
  imgDiapo[j].style.width = movePixels/(maxImg+1) +"px";
  imgDiapo[j].classList.add("miniImg")
  //Events clic diapo
  imgDiapo[j].addEventListener("click",function (){

//ADD
let positionDiv = -movePixels * (j-1);

//Move the div
divToMove.style.transform = "translateX(" + positionDiv + "px)";
  })
divMini.style = "   border-left:  white 1px solid; border-bottom:  white 1px solid; border-right:  white 1px solid;";
  divMini.append(imgDiapo[j]);
 
}
