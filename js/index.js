
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
  imgDiapo[j].src = "img/0"+j+".jpg"; 
  imgDiapo[j].style.width = movePixels/(maxImg+1) +"px";
  imgDiapo[j].classList.add("miniImg")
  //Events clic diapo
  imgDiapo[j].addEventListener("click",function (){

//ADD
let positionDiv = -movePixels * (j-1);

//Move the div
divToMove.style.transform = "translateX(" + positionDiv + "px)";
  })

  divMini.append(imgDiapo[j]);


  function MoveImage(direction = 1) {
    positionDiv = positionDiv - movePixels * direction;
    if (positionDiv > 0) {
      positionDiv = -movePixels * maxImg;
    }
    if (positionDiv < maxImg * (movePixels * -1)) {
      positionDiv = 0;
    }
 //divToMove.style.transform = "translateX(" + positionDiv + "px)";
  }


}
