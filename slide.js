const banner = document.querySelector(".banner");
const slider = document.querySelector(".slider");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const imgUrl=[
    "https://placekitten.com/400/100?image=1",
    "https://placekitten.com/400/100?image=2",
    "https://placekitten.com/400/100?image=3",
]

function domReady(){
    console.log("페이지가 구성되었습니다.");
}
function allLoaded(){
    console.log("모든 리소스가 로드되었습니다.")
}

document.addEventListener("DOMContentLoaded", domReady);
window.addEventListener("load", allLoaded);

const cloneFirst = slider.firstElementChild.cloneNode(true)
//const cloneLast = slider.lastElementChild.cloneNode(true);

fetch(imgUrl[0])
    .then(res => res.blob())
    .then(blob => {
        const url=URL.createObjectURL((blob))
        img1.src=url;
        cloneFirst.childNodes[0].src=url;
    });
fetch(imgUrl[1])
    .then(res => res.blob())
    .then(blob => {
        img2.src=URL.createObjectURL((blob));
    });
fetch(imgUrl[2])
    .then(res => res.blob())
    .then(blob => {
        img3.src=URL.createObjectURL((blob));
    });

slider.append(cloneFirst);
//slider.insertBefore(cloneLast, slider.firstElementChild);

let idx=0;

function move(){
    idx+=1;
    slider.style.transition='0.5s';
    slider.style.left=-idx*400+'px';
    if (idx==3){
        idx=0;
        setTimeout(function(){
            slider.style.transition='0s';
            slider.style.left=-idx*400+'px';
        }, 500);
    }
}


let interval = setInterval(move, 3000);

banner.addEventListener("touchend", function(){
    clearInterval(interval);
    interval=setInterval(move, 3000);
    move();
});
/*
banner.addEventListener("click", function(){
    clearInterval(interval);
    interval=setInterval(move, 3000);
    move();
});
*/

