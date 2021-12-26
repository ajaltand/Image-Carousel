const wrapper = document.getElementById("carousel-container-wrapper");
const images = document.getElementById("image-container");

const imgWidth = 400;
const imgCount = images.children.length;

images.style.width = `${imgCount * imgWidth}px`;



for (let i=0; i < imgCount; i++){
    const image = images.children[i];

    image.style.left = `${i * imgWidth}px`;
}

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");



let currentIndex = 0;



nextBtn.onclick = function (){
    currentIndex++;
    if (currentIndex>4){
        currentIndex=0;
    }    
        images.style.left = `-${currentIndex * imgWidth}px`;
};

prevBtn.onclick = function (){
    currentIndex--;
    if (currentIndex<0){
        currentIndex=imgCount-1;
    }
    images.style.left = `-${currentIndex * imgWidth}px`;
};

const span = document.getElementById("span")


for(j=1;j<=imgCount;j++){
    let dot = document.createElement("img");
    dot.src ="images/dot.png";
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.position="relative";
    dot.setAttribute("id",`dot${j}`)
    span.appendChild(dot);
}

const dots=Array.from(span.children)

span.addEventListener('click', e => {
    const targetDot = e.target.closest('img');

    if(!targetDot) return;

    const targetIndex = dots.findIndex(dot => dot ===targetDot)

    images.style.left = `-${targetIndex * imgWidth}px`;


})
